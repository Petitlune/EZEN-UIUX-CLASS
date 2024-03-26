const products = {
  data: [
    {
      num: 1,
      id: Date.now(),
      newItem: "NEW",
      name: "(휘핑클라우드)휘핑 벨벳 블러셔",
      desc: "#말랑블렌딩 #뽀용벨벳 #휘핑클라우드",
      price: 13000,
      category: "face",
      img: "./pageNew_img/wh_Blusher_P_01-430x430.jpg",
      imgHover: "./pageNew_img/wh_Blusher_M_02-430x430.jpg",
      color: ["./pageNew_img/멜론_fca193.jpg", "./pageNew_img/베리_f1a5ae.jpg"],
    },
    {
      num: 2,
      id: Date.now() + 1,
      newItem: "NEW",
      name: "(휘핑클라우드)프루티 듀이틴트",
      desc: "#맑고가벼운 #물빛스밈 #휘핑클라우드",
      price: 13000,
      category: "lip",
      img: "./pageNew_img/wh_Tint_P_02-430x430.jpg",
      imgHover: "./pageNew_img/wh_Tint_M_02-430x430.jpg",
      color: [
        "./page02_img/fruitydewy_01HeartPopsicle_c.jpg",
        "./page02_img/fruitydewy_02FigParfait_c.jpg",
        "./page02_img/fruitydewy_03RaspberryLolly_c.jpg",
        "./pageNew_img/04_de5765.jpg",
        "./pageNew_img/05_ec4b43.jpg",
      ],
    },
    {
      num: 3,
      id: Date.now() + 2,
      newItem: "NEW",
      name: "(휘핑클라우드)플레이컬러아이즈",
      desc: "#다채로운라이트컬러 #밀착착붙제형 #휘핑클라우드",
      price: 28000,
      category: "eye",
      img: "./pageNew_img/wh_PCE_P_01-430x430.jpg",
      imgHover: "./pageNew_img/wh_PCE_M_02-430x430.jpg",
      color: ["./pageNew_img/무우우.jpg", "./pageNew_img/베리소다.jpg"],
    },
    {
      num: 4,
      id: Date.now() + 3,
      newItem: "NEW",
      name: "글레이즈 플럼퍼 글로스 4g",
      desc: "#은하수광택 #플럼퍼",
      price: 13000,
      category: "lip",
      img: "./page01_img/glaze_plump_gloss_01-430x430.jpg",
      imgHover: "./page01_img/glaze_plump_gloss_04-430x430.jpg",
      color: [
        "./page01_img/glaze_plump_gloss_01_SparklingBlue_c.jpg",
        "./page01_img/glaze_plump_gloss_02_VioletQuartz_c.jpg",
        "./page01_img/glaze_plump_gloss_03_AuroraPink_c.jpg",
      ],
    },
    {
      num: 5,
      id: Date.now() + 4,
      newItem: "NEW",
      name: "마이 베스트 톤 아이 팔레트[교체용] 0.8g",
      desc: "#MBTEYE #커스텀팔레트",
      price: 8000,
      category: "eye",
      img: "./pageNew_img/MBTeye_R_01-430x430.jpg",
      imgHover: "./pageNew_img/MBTeye_R_03-430x430.jpg",
      color: [
        "./page01_img/MBTeye_I_Love_mE_c.jpg",
        "./page01_img/MBTeye_Everyone_ideal_type_c.jpg",
        "./page01_img/MBTeye_not_E_but_I_c.jpg",
      ],
    },
    {
      num: 6,
      id: Date.now() + 5,
      newItem: "NEW",
      name: "마이 베스트 톤 아이 팔레트 7g~",
      desc: "#MBTEYE #커스텀팔레트",
      price: 30000,
      category: "eye",
      img: "./page01_img/MBTeye_01-430x430.jpg",
      imgHover: "./page01_img/MBTeye_04-430x430.jpg",
      color: [
        "./page01_img/MBTeye_I_Love_mE_c.jpg",
        "./page01_img/MBTeye_Everyone_ideal_type_c.jpg",
        "./page01_img/MBTeye_not_E_but_I_c.jpg",
      ],
    },
    {
      num: 7,
      id: Date.now() + +6,
      newItem: "NEW",
      name: "미씽유 핸드크림 #매력덩어리 판다 30ml",
      desc: "#뛰바오 #리플레이 #복숭아향",
      price: 7500,
      category: "cream",
      img: "./page01_img/missingU_panda_01-430x430.jpg",
      imgHover: "./page01_img/missingU_panda_02-430x430.jpg",
      color: [],
    },
    {
      num: 8,
      id: Date.now() + 7,
      newItem: "NEW",
      name: "디어 달링 오일 틴트 4.2g",
      desc: "#오일틴트",
      price: 11000,
      category: "lip",
      img: "./page01_img/Dear_Darling_Oil_Tint_01-430x430.jpg",
      imgHover: "./page01_img/Dear_Darling_Oil_Tint_M_02-430x430.jpg",
      color: [
        "./page01_img/650003627_aa0016.jpg",
        "./page01_img/650003628_77000f.jpg",
        "./page01_img/650003629_c10046.jpg",
        "./page01_img/650003630_c4331d.jpg",
        "./page01_img/650003631_fbbcce.jpg",
        "./page01_img/650003646_ffb5df.jpg",
      ],
    },
    {
      num: 9,
      id: Date.now() + 8,
      newItem: "NEW",
      name: "시럽 글로시밤 #리플레이 2.5g",
      desc: "#리플레이 #시럽글로시밤",
      price: 14000,
      category: "lip",
      img: "./page01_img/replay_pd_balm_01-430x430.jpg",
      imgHover: "./page01_img/replay_all_03-430x430.jpg",
      color: [
        "./page01_img/650003585_dcbfcd.jpg",
        "./page01_img/650003586_bc1b427.jpg",
        "./page01_img/650003587_e2c7da.jpg",
      ],
    },
    {
      num: 10,
      id: Date.now() + 9,
      newItem: "NEW",
      name: "룩 앳 마이 아이즈 #리플레이 1.9g~",
      desc: "#룩앳마이아이즈 #리플레이 #아이섀도우",
      price: 5500,
      category: "eye",
      img: "./page01_img/replay_pd_lookat_02-430x430.jpg",
      imgHover: "./page01_img/replay_lookat_02-430x430.jpg",
      color: [
        "./page01_img/650003598_dba992.jpg",
        "./page01_img/650003599_e7cebc.jpg",
        "./page01_img/650003600_dfaaac.jpg",
        "./page01_img/650003601_e99a83.jpg",
        "./page01_img/650003602_c9aac4.jpg",
        "./page01_img/650003603_b88169.jpg",
        "./page01_img/650003604_e3b1b3.jpg",
        "./page01_img/650003605_f9cbd0.jpg",
      ],
    },
    {
      num: 11,
      id: Date.now() + 10,
      newItem: "NEW",
      name: "플레이 컬러 아이즈 #리플레이 3.8g~",
      desc: "#리플레이 #아이섀도우 #플레이컬러아이즈",
      price: 18000,
      category: "eye",
      img: "./page01_img/replay_pd_pce_01-430x430.jpg",
      imgHover: "./page01_img/replay_all_01-430x430.jpg",
      color: [
        "./page01_img/650003569.jpg",
        "./page01_img/650003570.jpg",
        "./page01_img/650003571.jpg",
      ],
    },
    {
      num: 12,
      id: Date.now() + 11,
      newItem: "NEW",
      name: "베이스 앤 오버 립 펜슬 #핑크베이지 1g",
      desc: "#립펜슬 #오버립",
      price: 12000,
      category: "lip",
      img: "./page01_img/base_over_lip_PD_01-430x430.jpg",
      imgHover: "./page01_img/base_over_lip_MD_01-430x430.jpg",
      color: [],
    },
  ],
  data01: [
    {
      num: 13,
      id: Date.now() + 12,
      newItem: "NEW",
      name: "더블 래스팅 비건 커버 파운데이션 SPF32 PA++ 30g",
      desc: "#24H착붙 #비건파데",
      price: 29000,
      category: "face",
      img: "./page01_img/double_vegan_01-430x430.jpg",
      imgHover: "./page01_img/double_vegan_05-430x430.jpg",
      color: [
        "./page01_img/double_vegan_17c_c.jpg",
        "./page01_img/double_vegan_19n_c.jpg",
        "./page01_img/double_vegan_21n_c.jpg",
        "./page01_img/double_vegan_23n_c.jpg",
      ],
    },
    {
      num: 14,
      id: Date.now() + 13,
      newItem: "NEW",
      name: "래쉬업 콤브 마스카라 8g",
      desc: "#마스카라 #콤브브러쉬",
      price: 16000,
      category: "eye",
      img: "./page01_img/pd_01-430x430.jpg",
      imgHover: "./page01_img/md_03-430x430.jpg",
      color: [
        "./page01_img/래쉬업_블랙.jpg",
        "./page01_img/래쉬업_애쉬블랙.jpg",
      ],
    },
    {
      num: 15,
      id: Date.now() + 14,
      newItem: "NEW",
      name: "하트 플러터 블러셔 #핑카이브 4g",
      desc: "#MLBB #핑덕러버스 #핑카이브",
      price: 13000,
      category: "face",
      img: "./page01_img/pink_archive_HFB_01-430x430.jpg",
      imgHover: "./page01_img/pink_archive_HFB_04-430x430.jpg",
      color: [],
    },
    {
      num: 16,
      id: Date.now() + 15,
      newItem: "NEW",
      name: "픽싱 틴트 벨벳 #핑카이브 3.8g",
      desc: "#MLBB #핑덕러버스 #핑카이브",
      price: 14000,
      category: "eye",
      img: "./page01_img/pink_archive_FTB_01-430x430.jpg",
      imgHover: "./page01_img/pink_archive_FTB_04-430x430.jpg",
      color: [],
    },

    {
      num: 17,
      id: Date.now() + 16,
      newItem: "NEW",
      name: "플레이 컬러 아이즈 #핑카이브 8.3g",
      desc: "#MLBB #핑덕러버스 #핑카이브",
      price: 28000,
      category: "eye",
      img: "./page02_img/pink_archive_PCE_01-430x430.jpg",
      imgHover: "./page02_img/pink_archive_PCE_03-430x430.jpg",
      color: [],
    },
    {
      num: 18,
      id: Date.now() + 17,
      newItem: "NEW",
      name: "재창조 메이커 1g",
      desc: "#부위별음영 #조효진쉐딩 #한끗음영",
      price: 14000,
      category: "face",
      img: "./page02_img/reborn_maker_02-430x430.jpg",
      imgHover: "./page02_img/reborn_maker_05-430x430.jpg",
      color: [
        "./page02_img/reborn_maker_cool_c.jpg",
        "./page02_img/reborn_maker_warm_c.jpg",
      ],
    },
    {
      num: 19,
      id: Date.now() + 18,
      newItem: "NEW",
      name: "진저슈가 멜팅 밤 2.3g",
      desc: "#멜팅밤 #진저슈가",
      price: 13000,
      category: "lip",
      img: "./page02_img/ginger_meltingbalm_01-430x430.jpg",
      imgHover: "./page02_img/ginger_meltingbalm_M_01-430x430.jpg",
      color: [
        "./page02_img/01_b25947.jpg",
        "./page02_img/02_ad4f52.jpg",
        "./page02_img/03_cb5b4b.jpg",
        "./page02_img/04_a3503d.jpg",
        "./page02_img/05_dd343e.jpg",
      ],
    },
    {
      num: 20,
      id: Date.now() + 19,
      newItem: "NEW",
      name: "글로우 픽싱 틴트 3.8g",
      desc: "#셀러뷰리티 #수분글로잉 #오일광택",
      price: 14000,
      category: "lip",
      img: "./page02_img/pd_01-430x430.jpg",
      imgHover: "./page02_img/glowfixing_tint_05-430x430.jpg",
      color: [
        "./page02_img/glowfixing_tint_01purecoral_c.jpg",
        "./page02_img/glowfixing_tint_02mellowpink_c.jpg",
        "./page02_img/glowfixing_tint_04chillingred_c.jpg",
        "./page02_img/glowfixing_tint_05mauvement_c.jpg",
        "./page02_img/glowfixing_tint_06peachblended_c.jpg",
        "./page02_img/glowfixing_tint_07coldfuchsia_c.jpg",
        "./page02_img/glowfixing_shibuya_c.jpg",
        "./page02_img/08_84133b.jpg",
      ],
    },
    {
      num: 21,
      id: Date.now() + 20,
      newItem: "NEW",
      name: "하트 팝 블러셔 #셀러뷰리티 4g",
      desc: "#셀러뷰리티 #자연광블러셔",
      price: 13000,
      category: "face",
      img: "./page02_img/pd_hpb_01-430x430.jpg",
      imgHover: "./page02_img/pink_archive_PCE_03-430x430.jpg",
      color: [
        "./page02_img/651000241_Shall_we_dance_f7cab7.jpg",
        "./page02_img/651000243_Aurora_Chandelier_ca96b6.jpg",
        "./page02_img/heartpop_01sqeezeberry_c.jpg",
        "./page02_img/heartpop_02supersunset_c.jpg",
        "./page02_img/heartpop_03borntobechic_c.jpg",
      ],
    },
    {
      num: 22,
      id: Date.now() + 21,
      newItem: "NEW",
      name: "플레이 컬러 아이즈 #셀러뷰리티 6.5g~",
      desc: "#셀러뷰리티 #퍼스널컬러",
      price: 30000,
      category: "eye",
      img: "./page02_img/pd_all_01-1-430x430.jpg",
      imgHover: "./page02_img/doah_PCE_01-430x430.jpg",
      color: [
        "./page02_img/warm_ebb8a3.jpg",
        "./page02_img/cool_d4a7dc.jpg",
        "./page02_img/playcoloreyes2023_cool_c.jpg",
        "./page02_img/playcoloreyes2023_warm_c.jpg",
      ],
    },
    {
      num: 23,
      id: Date.now() + 22,
      newItem: "NEW",
      name: "플레이 컬러 아이즈 #베어꾸 콜라보 8.9g",
      desc: "#베어꾸 #소프트&밀키 #플레이컬러아이즈",
      price: 28000,
      category: "eye",
      img: "./page02_img/제품컷_플컬아_02-430x430.jpg",
      imgHover: "./page02_img/모델컷_플컬아_01-430x430.jpg",
      color: [],
    },
    {
      num: 24,
      id: Date.now() + 23,
      newItem: "NEW",
      name: "플레이 컬러 아이즈 #시티 에디션 5.6g",
      desc: "#4색팔레트 #플레이리스트 5.6g",
      price: 16000,
      category: "eye",
      img: "./page02_img/playcoloreyes_4colors_02-430x430.jpg",
      imgHover: "./page02_img/playcoloreyes_4colors_04-430x430.jpg",
      color: [
        "./page02_img/playcoloreyes_4colors_gangnam_c.jpg",
        "./page02_img/playcoloreyes_4colors_hangang_c.jpg",
        "./page02_img/playcoloreyes_4colors_shibuya_c.jpg",
      ],
    },
  ],
  data02: [
    {
      num: 25,
      id: Date.now() + 24,
      newItem: "NEW",
      name: "글로우 픽싱 틴트 #시티 에디션 3.8g",
      desc: "#수분글로잉 #수채화발색",
      price: 14000,
      category: "lip",
      img: "./page02_img/glowfixing_city_02-430x430.jpg",
      imgHover: "./page02_img/glowfixing_city_05-430x430.jpg",
      color: [
        "./page02_img/glowfixing_gangnam_c.jpg",
        "./page02_img/glowfixing_hangang_c.jpg",
        "./page02_img/glowfixing_shibuya_c.jpg",
      ],
    },
    {
      num: 26,
      id: Date.now() + 25,
      newItem: "NEW",
      name: "프루티 듀이 틴트 4.5g",
      desc: "#물빛스밈틴트 #청량틴트",
      price: 13000,
      category: "lip",
      img: "./page02_img/fruitydewy02-430x430.jpg",
      imgHover: "./page02_img/fruitydewy06-430x430.jpg",
      color: [
        "./page02_img/fruitydewy_01HeartPopsicle_c.jpg",
        "./page02_img/fruitydewy_02FigParfait_c.jpg",
        "./page02_img/fruitydewy_03RaspberryLolly_c.jpg",
      ],
    },
    {
      num: 27,
      id: Date.now() + 26,
      newItem: "NEW",
      name: "파워 래쉬 속눈썹 영양제 6g",
      desc: "#4주후 #고농축성분",
      price: 23000,
      category: "eye",
      img: "./page02_img/powerlash_01-430x430.jpg",
      imgHover: "./page02_img/powerlash_02-430x430.jpg",
      color: [],
    },
    {
      num: 28,
      id: Date.now() + 27,
      newItem: "NEW",
      name: "라인 픽스 브러쉬 라이너 0.5g",
      desc: "#아이라이너 #프루프라이너",
      price: 14000,
      category: "eye",
      img: "./page02_img/line_fix_brush_liner_01-430x430.jpg",
      imgHover: "./page02_img/line_fix_brush_liner_02-430x430.jpg",
      color: [],
    },
    {
      num: 29,
      id: Date.now() + 28,
      newItem: "NEW",
      name: "순정 시카 카밍 앰플 에센스 50ml",
      desc: "#순정 #앰플에센스",
      price: 29000,
      category: "face",
      img: "./page02_img/제품컷_02-430x430.jpg",
      imgHover:
        "./page02_img/THN_soonjung-cica-calming-ampoule-essence-430x430.jpg",
      color: [],
    },
    {
      num: 30,
      id: Date.now() + 29,
      newItem: "NEW",
      name: "님프 광채 볼류머 24g",
      desc: "#광채 #빛나는 #피부",
      price: 20000,
      category: "face",
      img: "./page02_img/nymph_aura_01-430x430.jpg",
      imgHover: "./page02_img/nymph_aura_04-430x430.jpg",
      color: [],
    },
  ],
};

export default products;
