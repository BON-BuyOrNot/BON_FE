import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTheme } from "../stores/themeSlice";

export const useThemeInit = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // 로컬 스토리지에서 테마 설정 확인
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      dispatch(setTheme(savedTheme === "dark"));
    } else {
      // 시스템 설정 확인
      const isDarkMode = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      dispatch(setTheme(isDarkMode));
    }

    // 시스템 테마 변경 감지
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        dispatch(setTheme(e.matches));
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [dispatch]);
};
