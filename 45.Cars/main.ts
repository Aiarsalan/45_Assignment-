function storeCarInfo(manufacturer: string, ModelName: string, ...extraOption: { [key :string]: any }[] ) : object {

    const carInfo = {
        manufacturer,
        ModelName,
        ...Object.assign({},...extraOption)


    }

    return carInfo


};

let answer = storeCarInfo("Suzuki", "Swift", {color:'Mattalic'}, {features:['Fully_Automatic', 'Airconditioned']});
console.log(answer);



