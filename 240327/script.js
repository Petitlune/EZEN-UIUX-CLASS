const cityOption = document.querySelector("#city");
const stateOption = document.querySelector("#state");
const tableBody = document.querySelector(".shopinfo_table tbody");
const pageNationContainer = document.querySelector(".shopinfo_pager ul");
const searchButton = document.querySelector(".shopsearch_filter span");
const searchBar = document.querySelector(
  ".shopsearch_filter input[type='text']"
);
const searchForm = document.querySelector(
  ".shopsearch_filter .section:first-child form"
);
console.log(searchForm);
const checkBoxs = document.querySelectorAll(
  ".shopsearch_filter .section input[type ='checkbox'] "
);
console.log(checkBoxs);

//table data making
const createRow = (data) => {
  const row = document.createElement("tr");
  row.id = data.store;
  row.innerHTML = `
  <td>${data.store}</td>
  <td>${data.main_area}</td>
  <td>${data.address}</td>
  <td>${data.tel}</td>
  <td>${data.service
    .map(
      (service) => `<i class= "${service}">
  </i>`
    )
    .join("")}</td>
  `;

  return row;
};

//data rendering
const itemPerPage = 5;
let currentPage = 1;

const renderData = (data) => {
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentPageData = data.slice(startIndex, endIndex);
  tableBody.innerHTML = "";
  currentPageData.forEach((item) => {
    const row = createRow(item);
    tableBody.appendChild(row);
  });
};
//page nation
const renderPagination = (data) => {
  pageNationContainer.innerHTML = "";
  const totalDataLength = data.length;
  if (totalDataLength <= itemPerPage) {
    return;
  }
  const totalPages = Math.ceil(totalDataLength / itemPerPage);
  const currentPageGroup = Math.ceil(currentPage / itemPerPage);

  if (currentPageGroup > 1) {
    const prevGroupButton = document.createElement("li");
    prevGroupButton.innerText = "◀";
    prevGroupButton.addEventListener("click", () => {
      currentPage = (currentPageGroup - 1) * 5;
      renderData(data);
      renderPagination(data);
    });
    pageNationContainer.appendChild(prevGroupButton);
  }

  for (
    let i = (currentPageGroup - 1) * 5 + 1;
    i <= Math.min(currentPageGroup * 5, totalPages);
    i++
  ) {
    const pageLink = document.createElement("li");
    pageLink.innerText = i;
    pageLink.addEventListener("click", () => {
      currentPage = i;
      renderData(data);
    });
    if (i === currentPage) {
      pageLink.classList.add("active");
    }
    pageNationContainer.appendChild(pageLink);
  }

  if (currentPageGroup < Math.ceil(totalPages / 5)) {
    const nextGroupButton = document.createElement("li");
    nextGroupButton.innerText = "▶";
    nextGroupButton.addEventListener("click", () => {
      currentPage = currentPageGroup * 5 + 1;
      renderData(data);
      renderPagination(data);
    });
    pageNationContainer.appendChild(nextGroupButton);
  }

  const li = document.querySelectorAll("li");
  li.forEach((item) => {
    item.addEventListener("click", () => {
      li.forEach((item) => item.classList.remove("active"));
      item.classList.add("active");
    });
  });

  const lastPageButton = document.createElement("li");
  lastPageButton.style.width = 50 + "px";
  lastPageButton.innerText = "마지막";
  lastPageButton.addEventListener("click", () => {
    currentPage = totalPages;
    renderData(data);
    renderPagination(data);
  });
  pageNationContainer.appendChild(lastPageButton);
};

// data를 찾아와 하단에 출력시키는 함수 정의
// 1개 페이지에 5개의 도시 정보 출력
// slice: slice(arg, arg) = > 첫번째 매개변수부터 2번째 매개변수 전까지의 데이터를 찾아서 배열화

//jsonData
const cityList = "./source/cityInfo.json";
const storeList = "./source/storeInfo.json";

//fetch함수 밖으로 값 꺼내기위해서 전역요소에 변수 하나 지정해줌.
let cityInfo;
let storeInfo;

//fetch함수로 데이터를 객체로 변환
fetch(cityList)
  .then((response) => response.json())
  .then((data) => {
    cityInfo = data;
    console.log(data);
    for (let city in cityInfo) {
      const option = document.createElement("option");
      option.value = city;
      option.id = city;
      option.innerText = city;
      console.log(city);
      cityOption.appendChild(option);
    }
  });

fetch(storeList)
  .then((response) => response.json())
  .then((data) => {
    storeInfo = data;
    renderData(storeInfo);
    renderPagination(storeInfo);
  });

//cursor move
const cursor = document.querySelector("#cursor");
//cursor의 변하는(page)값
let x = 0;
let y = 0;
//cursor의 오리지널 값
let targetX = 0;
let targetY = 0;
//따라오는 속도 지정 1/10의 속도
let speed = 0.2;

window.addEventListener("mousemove", (e) => {
  x = e.pageX;
  y = e.pageY;
});

const loop = () => {
  targetX += (x - targetX) * speed;
  targetY += (y - targetY) * speed;
  cursor.style.top = targetY + "px";
  cursor.style.left = targetX + "px";
  window.requestAnimationFrame(loop);
};
loop();
//cusor 선택시 한바퀴 돌게하는 함수
const showCursorRotate = () => {
  cursor.classList.add("active");
};
const hideCursorRotate = () => {
  cursor.classList.remove("active");
};

window.addEventListener("click", showCursorRotate);

// map click event
const mapAreas = document.querySelectorAll(".shopsearch_map > div");

mapAreas.forEach((area) => {
  area.addEventListener("click", (e) => {
    area.classList.add("active");
    showCursorRotate();
    setTimeout(() => {
      hideCursorRotate();
    }, 1000);
    mapAreas.forEach((area) => area.classList.remove("active"));
    area.classList.add("active");

    const clickedCity = e.target.id;
    const matchedCityInfo = storeInfo.filter(
      (city) => city.main_area === clickedCity
    );
    //List 값 리셋시키는 역할
    tableBody.innerHTML = "";
    if (matchedCityInfo.length > 0) {
      renderData(matchedCityInfo);
      if (matchedCityInfo.length >= 5) {
        renderPagination(matchedCityInfo);
      } else {
        pageNationContainer.innerHTML = "";
      }
    }

    cityOption.value = clickedCity;
    //이벤트가 발생되었는지 알려주는 함수 dispatchEvent
    cityOption.dispatchEvent(new Event("change"));
  });
});

//city option change event

cityOption.addEventListener("change", () => {
  currentPage = 1;
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);
  const selectedCity = cityOption.value;
  //예외조항 처리
  if (selectedCity !== "none") {
    stateOption.innerHTML = "<option>구/군 선택</option>";

    if (cityInfo[selectedCity]) {
      cityInfo[selectedCity].forEach((cityItem) => {
        const option = document.createElement("option");
        option.innerText = cityItem;
        stateOption.appendChild(option);
      });
    }
  }
  mapAreas.forEach((area) => {
    if (area.id === selectedCity) {
      area.classList.add("active");
    } else {
      area.classList.remove("active");
    }
  });

  const matchedCityInfo = storeInfo.filter(
    (city) => city.main_area === selectedCity
  );
  tableBody.innerHTML = "";
  if (matchedCityInfo.length > 0) {
    renderData(matchedCityInfo);
    if (matchedCityInfo.length >= 5) {
      renderPagination(matchedCityInfo);
    } else {
      pageNationContainer.innerHTML = "";
    }
  } else {
    renderData(storeInfo);
    renderPagination(storeInfo);
  }
});
//checkbox option

const filterData = (data) => {
  const selectedCategories = [
    ...document.querySelectorAll(".filter-checkbox:checked"),
  ].map((checkbox) => checkbox.value);

  const filteredData = data.filter((item) =>
    selectedCategories.every((service) => item.service.includes(service))
  );
  renderData(filteredData);
  renderPagination(filteredData);
};

const optionMode = () => {
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  filterData(storeInfo);
};

checkBoxs.forEach((checkbox) => {
  checkbox.addEventListener("change", optionMode);
});

//search event
searchButton.addEventListener("click", () => {
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  tableBody.innerHTML = "";

  const cityValue = cityOption.value;
  const stateValue = stateOption.value;
  const searchValue = searchBar.value;
  console.log(cityValue, stateValue, searchValue);

  let searchResults = storeInfo.filter((data) => data.store === searchValue);
  let alertShown = false;

  if (!searchValue) {
    storeInfo.forEach((data) => {
      const mainAreaMatched = data.main_area === cityValue;
      const subAreaMatched = data.sub_area === stateValue;

      if (cityValue === "도/시 선택") {
        searchResults.push(data);
      } else if (mainAreaMatched && subAreaMatched) {
        searchResults.push(data);
      }
      if (stateValue === "구/군 선택" && !alertShown) {
        alert("구/군 선택해주세요!");
        alertShown = true;
      }
      console.log(mainAreaMatched, subAreaMatched);
    });
  }
  renderData(searchResults);
  if (searchResults.length >= 5) {
    renderPagination(searchResults);
  } else {
    pageNationContainer.innerHTML = "";
  }
  searchBar.value = "";
});

//loading spiner

const spinner = document.querySelector(".spinner");
console.log(spinner);
const showSpinner = () => {
  spinner.classList.remove("hiddenspinner");
};
const hiddenspinner = () => {
  spinner.classList.add("hiddenspinner");
};
showSpinner();
setTimeout(() => {
  hiddenspinner();
}, 1000);

//enter event (search event 02)
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  showCursorRotate();
  setTimeout(() => {
    hideCursorRotate();
  }, 1000);

  tableBody.innerHTML = "";

  const cityValue = cityOption.value;
  const stateValue = stateOption.value;
  const searchValue = searchBar.value;
  console.log(cityValue, stateValue, searchValue);

  let searchResults = storeInfo.filter((data) => data.store === searchValue);
  let alertShown = false;

  if (!searchValue) {
    storeInfo.forEach((data) => {
      const mainAreaMatched = data.main_area === cityValue;
      const subAreaMatched = data.sub_area === stateValue;

      if (cityValue === "도/시 선택") {
        searchResults.push(data);
      } else if (mainAreaMatched && subAreaMatched) {
        searchResults.push(data);
      }
      if (stateValue === "구/군 선택" && !alertShown) {
        alert("구/군 선택해주세요!");
        alertShown = true;
      }
      console.log(mainAreaMatched, subAreaMatched);
    });
  }
  renderData(searchResults);
  if (searchResults.length >= 5) {
    renderPagination(searchResults);
  } else {
    pageNationContainer.innerHTML = "";
  }
  searchBar.value = "";
});
