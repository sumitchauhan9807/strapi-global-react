import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { setLang } from "src/redux/language";
import { useDispatch, useSelector } from "react-redux";
import { Languages } from "src/helpers";
export function useWindowDimensions() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return windowDimensions;
}

function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export const useLanguageInQuery = () => {
	const params = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (params.lang) {
			let isLangExists = Languages.find((l) => l.code == params.lang);
			if (isLangExists) {
				// dispatch(setLang(params.lang));
			}
		}
	}, [params.lang]);
};

export const useDebouncedValue = (inputValue, delay) => {
	const [debouncedValue, setDebouncedValue] = useState(inputValue);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(inputValue);
		}, delay);

		return () => {
			clearTimeout(handler);
		};
	}, [inputValue, delay]);

	return debouncedValue;
};
