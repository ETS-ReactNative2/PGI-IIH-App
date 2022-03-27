export const RoleData = [{
    value: 'Doctor',
}, {
    value: 'Patient',
}];

export const HeightData = [{
    value: 'feet',
}, {
    value: 'meters',
}];

export const WeightData = [{
    value: 'Kg',
}, {
    value: 'Lb',
}];

export const genderData = [{
    value: 'Male',
}, {
    value: 'Female',
}, {
    value: 'Other',
}, {
    value: 'Prefer Not to Answer',
}];

export const educationLevelData = [{
    value: 'No formal education',
}, {
    value: 'High School Graduate',
}, {
    value: 'Diploma',
}, {
    value: 'Bachelor’s degree',
}, {
    value: 'Master’s degree',
}, {
    value: 'Professional degree',
}, {
    value: 'Doctorate degree',
}, {
    value: 'Other',
}];

export const incomeLevelData = [{
    value: '0-5,00,000',
}, {
    value: '5,00,00-10,00,000',
}, {
    value: '10,00,000-15,00,000',
}, {
    value: '> 15,00,000',
}];

export const dietaryPreferenceData = [{
    value: 'Vegetarian',
}, {
    value: 'Non-Vegetarian',
}, {
    value: 'Eggeterian',
}]

/*
No schooling completed
Nursery school to 8th grade
Some high school, no diploma
High school graduate, diploma or the equivalent (for example: GED)
Some college credit, no degree
Trade/technical/vocational training
Associate degree
Bachelor’s degree
Master’s degree
Professional degree
Doctorate degree

No formal education

High School Graduate

Diploma

• Bachelor’s degree

• Master’s degree

• Professional degree

• Doctorate degree

• Other
------
Text field
------
0-5,00,000
5,00,00-10,00,000,
10,00,000-15,00,000,
> 15,00,000
-------
Vegetarian
Non-Vegetarian
Eggeterian
*/

export const getCurrentDate = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;
    return today
}

export const feetToMeters = (feet, inches) => {
    const heightInMeter = parseInt(feet) * 0.3048 + parseInt(inches) * 0.0254
    return heightInMeter
}

export const lbToKg = (lb) => {
    const weightInKg = parseInt(lb) * 0.45359237
    return weightInKg
}

export const calculateBmi = (heightInMeter, weightInKg) => {
    return (weightInKg / (heightInMeter * heightInMeter))
}