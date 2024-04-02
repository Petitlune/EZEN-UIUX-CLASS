function Header() {
  const handlOnClick = () => {
    prompt("당신의 이름은 무엇입니까?");
  };

  return (
    <header>
      <h1>header</h1>
      <button onClick={handlOnClick}>클릭하세요 !</button>
    </header>
  );
}

export default Header;
