import {
  TAT_CA_DM,
  SACH_TRONG_NUOC,
  THIEU_NHI,
  SACH_GIAOKHOA_TKHAO,
  SACH_VANHOC,
  MANGA_COMIC,
  TAMLY_KNS,
  SH_NGOAINGU,

  SACH_NGOAI,
  SN_Other_Languages,
  SN_Children_Books,
  SN_Dictionaries,

  VANPP_DCHS,
  VANPP_PEN,
  VANPP_PAPPER,

  DO_CHOI,
  DO_CHOI_GD,
  DO_CHOI_OTAU,

  LUU_NIEM,


  BH_THOP,
  BH_THOP_NC,

  LD_SUCKHOE,
  CHAMSOC_DA,

} from './mock';

export const mockBaseQuery = async (args: any) => {
  await new Promise((res) => setTimeout(res, 300));

  const url = typeof args === "string" ? args : args?.url || "";
  const [path, queryString] = url.split("?");
  const params = Object.fromEntries(new URLSearchParams(queryString));
  const category = params.category;
  let responseData = null;

  console.log(params)
  switch (category) {
    case '2': responseData = TAT_CA_DM; break;

    case '4': responseData = SACH_TRONG_NUOC; break;
    case '14': responseData = THIEU_NHI; break;
    case '15': responseData = SACH_GIAOKHOA_TKHAO; break;
    case '9': responseData = SACH_VANHOC; break;
    case '6718': responseData = MANGA_COMIC; break;
    case '12': responseData = TAMLY_KNS; break;
    case '20': responseData = SH_NGOAINGU; break;

    case '3165': responseData = SACH_NGOAI; break;
    case '27': responseData = SN_Other_Languages; break;
    case '4216': responseData = SN_Children_Books; break;
    case '5421': responseData = SN_Dictionaries; break;

    case '86': responseData = VANPP_DCHS; break;
    case '279': responseData = VANPP_PEN; break;
    case '96': responseData = VANPP_PAPPER; break;

    case '5991': responseData = DO_CHOI; break;
    case '6377': responseData = DO_CHOI_GD; break;
    case '6356': responseData = DO_CHOI_OTAU; break;

    case '6181': responseData = BH_THOP; break;
    case '6514': responseData = BH_THOP_NC; break;


    case '6641': responseData = LD_SUCKHOE; break;
    case '6642': responseData = CHAMSOC_DA; break;


    case '/luu-niem': responseData = LUU_NIEM; break;
    default:
      responseData = {
        status: 0,
        message: "Category not found",
        data: null
      };
  }

  return { data: responseData };
};
