import { useContext, useEffect, useMemo, useState } from 'react'
import { CustomizerContext } from "../contexts/cuztomizerContext";
const useCustomizer = () => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const { dispatchCustomizer } = useContext(CustomizerContext);

    useEffect(() => {
        fetch('http://localhost:1337/api/customizer?populate=deep')
            .then(response => response.json())
            .then(response => {
                if (response.data) {
                    setData(response.data.attributes);
                } else {
                    setErr(response.error)
                }

                return response

            })
            .catch(err => setErr(err));
    }, []);
    const structuredTheme = useMemo(() => generateCustomTheme(data, "theme", dispatchCustomizer), [data]);
    return (
        {
            theme: structuredTheme, err
        }
    )
}

const generateCustomTheme = (data, arrName, cb) => {
    const dataWithoutCompName = removeComponentName(data, arrName);

    var structuredData = dataWithoutCompName;
    const isClrP = dataWithoutCompName.find(obj => obj["color-pallete"]);
    if (isClrP) {
        structuredData = structeColorPallete(dataWithoutCompName);
    }
    cb({ type: "GET", payload: { theme: structuredData } })
    return structuredData;
}


const removeComponentName = (data, arrName,) => {
    let newArr = data?.[arrName].slice(0)
    let returningArr = [];
    newArr?.forEach(obj => {
        delete obj.id;

        let newObj = { ...obj }
        let componentName = Object.values(obj)?.filter(item => { return item?.indexOf("customizer") !== -1 })?.map(item => item.split(".")[1]).join();
        delete newObj.__component;

        returningArr.push({
            [componentName]: newObj
        });

    });
    return returningArr;
}

const structeColorPallete = (data) => {
    let colorPicker = data.find((obj) => obj["color-pallete"])["color-pallete"]["palleteItems"];
    let clrObj = {};
    colorPicker = colorPicker.map((obj) => {
        return { [obj.name]: obj.colorPicker }
    }).map((obj, index) => {
        let innerObj = {};
        const innerArr = obj[Object.keys(obj)[0]]
        innerArr.forEach(arr => {
            innerObj[arr.name] = arr.color;
        })
        return {
            [Object.keys(obj)[0]]: innerObj
        }
    })

    colorPicker.forEach(obj => {
        clrObj[Object.keys(obj)[0]] = obj[Object.keys(obj)[0]]
    })

    let newDataArr = data.filter((obj => !obj["color-pallete"]));
    newDataArr.push({ pallete: clrObj });
    let newDataObj = {};
    newDataArr.forEach(obj => {
        newDataObj[Object.keys(obj)[0]] = obj[Object.keys(obj)[0]]
    });
    return newDataObj;
}

export default useCustomizer;

