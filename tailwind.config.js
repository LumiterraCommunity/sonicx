module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        yellow: {
          800: "#fdb325",
          "800_04": "#fdb325",
          "800_05": "#fdb325",
          "800_02": "#fdb325",
          "800_03": "#fcb325",
          "800_01": "#fcb325",
        },
        gray: {
          600: "#7d9a6f",
          800: "#403529",
          "800_09": "#403529",
          "800_08": "#403529",
          "800_07": "#403529",
          "800_06": "#403529",
          "800_05": "#403529",
          "800_04": "#403529",
          "800_03": "#403529",
          "800_02": "#403529",
          "800_01": "#403529",
          "800_17": "#403529",
          "800_16": "#403529",
          "800_15": "#403529",
          "800_14": "#403529",
          "800_13": "#403529",
          "800_12": "#403529",
          "800_11": "#403529",
          "800_10": "#403529",
          "600_11": "#7d9a6f",
          "600_10": "#7d9a6f",
          "600_13": "#7d9a6f",
          "600_12": "#7d9a6f",
          "600_15": "#7d9a6f",
          "600_14": "#7d9a6f",
          "600_17": "#7d9a6f",
          "600_16": "#7d9a6f",
          "600_02": "#7d9a6f",
          "600_01": "#7d9a6f",
          "600_08": "#7d9a6f",
          "600_07": "#7d9a6f",
          "600_09": "#7d9a6f",
          "600_04": "#7d9a6f",
          "600_03": "#7d9a6f",
          "600_06": "#7d9a6f",
          "600_05": "#7d9a6f",
        },
        red: {
          500: "#ff462c",
          600: "#eb3636",
          900: "#930d0d",
          "600_15": "#eb3636",
          "600_14": "#eb3636",
          "600_13": "#eb3636",
          "600_12": "#eb3636",
          "600_17": "#eb3636",
          "600_16": "#eb3636",
          "600_11": "#eb3636",
          "600_10": "#eb3636",
          "600_09": "#eb3636",
          "600_04": "#eb3636",
          "900_05": "#920d0d",
          "600_03": "#eb3636",
          "900_04": "#930d0d",
          "900_07": "#920d0d",
          "600_02": "#eb3636",
          "900_06": "#930d0d",
          "600_01": "#eb3636",
          "600_08": "#eb3636",
          "900_09": "#920d0d",
          "600_07": "#eb3636",
          "900_08": "#930d0d",
          "600_06": "#eb3636",
          "600_05": "#eb3636",
          "900_01": "#920d0d",
          "900_03": "#920d0d",
          "900_02": "#930d0d",
          "900_16": "#920d0d",
          "900_15": "#84271a",
          "900_18": "#930d0d",
          "900_17": "#a51300",
          "900_19": "#84271a",
          "900_10": "#930d0d",
          "900_12": "#930d0d",
          "900_11": "#920d0d",
          "900_14": "#930d0d",
          "900_13": "#920d0d",
          "900_27": "#920d0d",
          "900_26": "#930d0d",
          "900_29": "#920d0d",
          "900_28": "#930d0d",
          "900_21": "#a51300",
          "900_20": "#920d0d",
          "900_23": "#920d0d",
          "900_22": "#930d0d",
          "900_25": "#920d0d",
          "900_24": "#930d0d",
          "500_06": "#ff462c",
          "500_07": "#ff462c",
          "500_04": "#ff462c",
          "500_05": "#ff462c",
          "500_02": "#ff462c",
          "500_03": "#ff462c",
          "500_01": "#ff462c",
          "900_38": "#930d0d",
          "900_37": "#920d0d",
          "900_39": "#920d0d",
          "900_30": "#930d0d",
          "900_32": "#930d0d",
          "900_31": "#920d0d",
          "900_34": "#930d0d",
          "900_33": "#920d0d",
          "900_36": "#930d0d",
          "900_35": "#920d0d",
          "500_08": "#ff462c",
        },
        orange: {
          50: "#fdebdd",
          100: "#fbe4c4",
          "50_03": "#fdebdd",
          "50_04": "#fdebdd",
          "50_01": "#fdebdd",
          "50_02": "#fdebdd",
          "50_07": "#fdebdd",
          "50_08": "#fdebdd",
          "50_05": "#fdebdd",
          "50_06": "#fdebdd",
          "100_09": "#fbe4c4",
          "100_03": "#fbe4c4",
          "100_04": "#fbe4c4",
          "100_01": "#fbe4c4",
          "100_02": "#fbe4c4",
          "100_07": "#fbe4c4",
          "100_08": "#fbe4c4",
          "100_05": "#fbe4c4",
          "100_06": "#fbe4c4",
          "100_10": "#fbe4c4",
          "100_11": "#fbe4c4",
          "100_14": "#fbe4c4",
          "100_15": "#fbe4c4",
          "100_12": "#fbe4c4",
          "100_13": "#fbe4c4",
          "100_16": "#fbe4c4",
          "100_17": "#fbe4c4",
        },
        white: {
          A700_10: "#ffffff",
          A700_11: "#ffffff",
          A700_14: "#ffffff",
          A700_15: "#ffffff",
          A700_12: "#ffffff",
          A700_13: "#ffffff",
          A700_16: "#ffffff",
          A700_17: "#ffffff",
          A700_03: "#ffffff",
          A700_04: "#ffffff",
          A700_01: "#ffffff",
          A700_02: "#ffffff",
          A700_07: "#ffffff",
          A700_08: "#ffffff",
          A700_05: "#ffffff",
          A700_06: "#ffffff",
          A700_09: "#ffffff",
          A700: "#ffffff",
        },
        lime: {
          900: "#6c3400",
          "900_04": "#6c3400",
          "900_05": "#6c3400",
          "900_06": "#6c3400",
          "900_07": "#6b3300",
          "900_01": "#6c3400",
          "900_02": "#6c3400",
          "900_03": "#6c3400",
          "900_08": "#6c3400",
          "900_09": "#6b3300",
          "900_10": "#6c3400",
          "900_15": "#a86d35",
          "900_16": "#6c3400",
          "900_17": "#6b3300",
          "900_18": "#a86d35",
          "900_11": "#6b3300",
          "900_12": "#a86d35",
          "900_13": "#6c3400",
          "900_14": "#6b3300",
          "900_19": "#6c3400",
          "900_20": "#6b3300",
          "900_21": "#a86d35",
          "900_26": "#a86d35",
          "900_27": "#6b3300",
          "900_28": "#a86d35",
          "900_29": "#6b3300",
          "900_22": "#6c3400",
          "900_23": "#6b3300",
          "900_24": "#a86d35",
          "900_25": "#6b3300",
          "900_30": "#a86d35",
          "900_31": "#6b3300",
          "900_32": "#a86d35",
        },
        deep_orange: {
          500: "#fd4b25",
          "500_06": "#fd4b25",
          "500_05": "#fd4b25",
          "500_04": "#fd4b25",
          "500_03": "#fd4b25",
          "500_02": "#fd4b25",
          "500_01": "#fd4b25",
        },
      },
      boxShadow: { xs: "0 2px 1px 0 #920d0d" },
      fontFamily: { roboto: "Roboto", swisblkcnbt: "Swis721 BlkCn BT", jollylodger: "Jolly Lodger" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};