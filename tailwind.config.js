module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      gray: colors.gray,
      purple: {
        50: "#f3f3ff",
        100: "#eaeafd",
        200: "#d8d9fc",
        300: "#b9b8fa",
        400: "#948ff6",
        500: "#7162f0",
        600: "#5d41e6",
        700: "#4e2fd2",
        800: "#4127b0",
        900: "#392396",
      },
      green: {
        50: "#eefffa",
        100: "#c6fff2",
        200: "#8dffe6",
        300: "#4bfdd7",
        400: "#1eebc6",
        500: "#00ceac",
        600: "#00a68e",
        700: "#018473",
        800: "#07685d",
        900: "#0b564d",
      },
      blue: {
        50: "#f2fafd",
        100: "#e3f3fb",
        200: "#c2e8f5",
        300: "#91d7ee",
        400: "#4ebfe2",
        500: "#28a8cf",
        600: "#1988b0",
        700: "#156d8f",
        800: "#165c76",
        900: "#174d63",
      },
      yellow: {
        50: "#ffffe7",
        100: "#feffc1",
        200: "#fffd86",
        300: "#fff341",
        400: "#ffe40d",
        500: "#ffd500",
        600: "#d19c00",
        700: "#a67002",
        800: "#89570a",
        900: "#74470f",
      },
      red: {
        50: "#fff0f2",
        100: "#ffdde2",
        200: "#ffc0c8",
        300: "#ff94a2",
        400: "#ff576d",
        500: "#ff2340",
        600: "#ff0022",
        700: "#d7001d",
        800: "#b1031a",
        900: "#920a1c",
      },
      orange: {
        50: "#fffcea",
        100: "#fff4c5",
        200: "#ffea85",
        300: "#ffd846",
        400: "#ffc51b",
        500: "#ffa200",
        600: "#e27a00",
        700: "#bb5302",
        800: "#984008",
        900: "#7c350b",
      },
      white: colors.white,
      slate: colors.slate,
      zinc: colors.zinc,
      neutral: colors.neutral,
      black: colors.black,
    }),
  },
  important: true,
};
