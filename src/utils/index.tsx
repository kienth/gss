import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { makeStyles } from "@mui/styles";
import { NavigateFunction } from "react-router-dom";

const primaryColor = {
  main: "#133867",
  light: "#123F77",
  dark: "#133157",
  bgColorGradient: "linear-gradient(45deg, #123F77 30%, #133157 90%)",
};
const secondaryColor = {
  main: "#D0BA32",
  light: "#F5DB37",
  dark: "#AB992C",
  bgColorGradient: "linear-gradient(45deg, #F5DB37 30%, #AB992C 90%)",
};

// const primaryColor = "#123F77";
const primaryBgColor = "#A5B6C9";
// const secondaryColor = "#F5DB37";
const bgColor = "#e5e9ec";

export { primaryColor, primaryBgColor, secondaryColor, bgColor };

export const MakeStyle = makeStyles({
  oneLinesEllipsis: {
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    "-webkit-line-clamp": 1,
  },
  twoLinesEllipsis: {
    display: "-webkit-box",
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
    "-webkit-line-clamp": 2,
  },
  scrollableContent: {
    maxHeight: "90vh",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: 5, // Set your desired width
      height: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: primaryColor.dark, // Set your desired color
      borderRadius: 5,
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: primaryBgColor, // Set your desired track color
      borderRadius: 5,
    },
  },
});

export const apilink = "https://jht.invesystem.xyz/";
// export const apilink = "http://localhost/jht/";

export const getCookie = (key: string) => {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
};

export const prepareApiHeader = (headers: any) => {
  const token = getCookie("token");
  if (token) {
    headers.set("authorization", `Bearer ${token}`);
  }
  return headers;
};

export const formatNumber = (data: number) => {
  if (data >= 1000000) {
    return (data / 1000000).toFixed(1) + "m";
  } else if (data >= 1000) {
    return (data / 1000).toFixed(1) + "k";
  } else {
    return data.toString();
  }
};

export const urls = [
  {
    label: "Request Form",
    path: "/request-form",
    sublevel: [],
  },
  {
    label: "Janitorial",
    path: "",
    sublevel: [{ label: "Request List", path: "/janitorial/request-list" }],
  },
  {
    label: "Security",
    path: "",
    sublevel: [{ label: "Request List", path: "/security/request-list" }],
  },
  {
    label: "Transportation",
    path: "",
    sublevel: [{ label: "Request List", path: "/transportation/request-list" }],
  },
  {
    label: "Billing",
    path: "/billing",
    sublevel: [],
  },
];

export const customNavigate = (
  event: any,
  navigate: NavigateFunction,
  to: string
) => {
  // Check if Ctrl or Cmd is pressed
  if (event.ctrlKey || event.metaKey) {
    // Allow default behavior to open the link in a new tab
    window.open(to, "_blank");
  } else {
    // Prevent default and use react-router-dom navigation
    event.preventDefault();
    navigate(to);
  }
};

export const exportJsonToExcel = async (
  jsonData: any[],
  headers: string[],
  fileName: string,
  logoBase64: any
) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Sheet1");

  const imageId = workbook.addImage({
    base64: logoBase64,
    extension: "png",
  });
  worksheet.addImage(imageId, {
    tl: { col: 0, row: 0 }, // Top-left corner
    ext: { width: 200, height: 100 }, // Adjust the width and height as needed
  });

  // Adjust row heights and column widths to fit the image dimensions
  worksheet.getRow(1).height = 50; // height in points
  worksheet.getRow(2).height = 50; // height in points

  // Merge cells for the logo area
  worksheet.mergeCells("A1:C2");

  // // Add coverage date
  // worksheet.getCell("D1").value = "COVERAGE:";
  // worksheet.getCell("E1").value = coverage;

  // Set the column widths
  worksheet.columns = [
    { width: 20 }, // Column A
    { width: 20 }, // Column B
    { width: 20 }, // Column C
    { width: 20 }, // Column D
    { width: 20 }, // Column E
    { width: 20 }, // Column F
    { width: 30 }, // Column G
  ];

  // Add headers
  const headerRow = worksheet.addRow(headers);
  headerRow.font = { bold: true };
  headerRow.alignment = { vertical: "middle", horizontal: "center" };
  headerRow.eachCell((cell) => {
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF000000" },
      bgColor: { argb: "FF000000" },
    };
    cell.font = {
      color: { argb: "FFFFFFFF" },
      bold: true,
    };
  });

  // Add JSON data
  jsonData.forEach((data) => {
    worksheet.addRow(Object.values(data));
  });

  // Save the workbook
  const buffer = await workbook.xlsx.writeBuffer();
  const blob = new Blob([buffer], { type: "application/octet-stream" });
  saveAs(blob, `${fileName}.xlsx`);
};
