import react from 'react'

export default (dataList, pkField, textField) => {
    let options =[];
    dataList.map(
        (item, key) =>{
            options.append({
                key: `${item[pkField]}-selectItem-${key}`,
                value: item[pkField],
                text: item[textField]});
            return null
        }
    );
    console.log(options)
    return options;
}