import { useState, useCallback, ChangeEvent, FormEvent } from 'react';

interface useFormOption {
    successFunc:(state:stateArray) => void,
    requireFunc:Function,
    preventDefault?:boolean,
    require?:boolean
}

type stateArray = any[];

type useInputReturnType = [any, React.Dispatch<any>, (e:ChangeEvent<HTMLInputElement>) => void]; 
type useInputType = (stats:stateArray) => useInputReturnType;

type useFormReturnRype = (e:FormEvent<HTMLFormElement>) => void;
type useFormType = (stats:stateArray, option:useFormOption) => useFormReturnRype;

const isAllowed = (array:any[]):boolean => {
    const boolean = array.reduce(((state, stats) => state || (!!stats === false)), false);
    return boolean;
}

export const useInput:useInputType = initialvalue => {
    const [input, setInput] = useState<any>(initialvalue);
    const changeInput = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    },[]);

    return [input, setInput, changeInput];
};

export const useForm:useFormType = (stateArray, option) => {
    const onSubmit = useCallback((e:FormEvent<HTMLFormElement>) => {
        const { preventDefault, successFunc, require, requireFunc } = option;
        if(preventDefault) e.preventDefault();

        if(require && isAllowed(stateArray)) {
            requireFunc();
            return;
        }
        successFunc.call(null, stateArray);
    },stateArray);

    return onSubmit;
}