import React, { useState } from 'react';
import { MainContainer, FormContainer, Input, Label, Button } from '../elements/FormElements';
import { useFormContext } from './FormContext';

const Form = () => {
    const [errorCardName, setErrorCardName] = useState('');
    const [errorCardNumbers, setErrorCardNumbers] = useState('');
    const [errorDateMM, setErrorDateMM] = useState('');
    const [errorDateYY, setErrorDateYY] = useState('');
    const [errorCVC, setErrorCVC] = useState('');

    const { inputName, setInputName, setLabelName, inputCardNumbers, setInputCardNumbers,
        setLabelCardNumber, inputMonth, setInputMonth, setLabelMonth,
        inputYear, setInputYear, setLabelYear, inputCVC, setInputCVC, setLabelCVC, setFormVisible }
        = useFormContext();

    function handleNameChange(e) {
        const value = e.target.value;
        // 📝 Remove all numbers and/or symbols 
        const formattedValue = value.replace(/[^a-zA-Z\s]/g, '');


        setInputName(formattedValue);
        setLabelName(formattedValue.toUpperCase());
    };

    function handleCardNumber(e) {
        // Eliminar caracteres no numéricos
        const digitsOnly = e.target.value.replace(/\D/g, '');

        // Obtener el formato inicial '0000 0000 0000 0000'
        const initialFormat = '0000 0000 0000 0000';

        // Reemplazar cada '0' con el dígito correspondiente de la entrada del usuario
        let digitIndex = 0;
        const formattedValue = initialFormat.replace(/0/g, () => digitsOnly.charAt(digitIndex++) || '0');

        // Actualizar el estado con los dígitos ingresados
        setInputCardNumbers(digitsOnly);
        setLabelCardNumber(formattedValue);
    }

    function handleDateAndCVC(e) {
        const value = e.target.value;

        // 📝 Delete everything that isn't number
        const formattedValue = value.replace(/[^0-9]/g, '');

        switch (e.target.name) {
            case 'month':
                setInputMonth(formattedValue);
                setLabelMonth(formattedValue.padStart(2, '0'));
                break;
            case 'year':
                setInputYear(formattedValue);
                setLabelYear(formattedValue.padStart(2, '0'));
                break;
            case 'ccv':
                setInputCVC(formattedValue);
                setLabelCVC(formattedValue);
                break;
        }
    };

    const cleanErrors = () => {
        setErrorCardName(''), setErrorCardNumbers(''), setErrorDateMM(''), setErrorDateYY(''), setErrorCVC('');
    };

    function handleSubmit(e) {
        e.preventDefault();

        cleanErrors();

        let hasErrors = false;
        const currentYear = new Date().getFullYear();

        if (inputName === '') {
            setErrorCardName("Can't be blank");
            hasErrors = true;
        } else if (inputName.length < 5 || inputName.length > 22) {
            setErrorCardName("Enter a valid name");
            hasErrors = true;
        }

        if (inputCardNumbers === '') {
            setErrorCardNumbers("Can't be blank");
            hasErrors = true;
        } else if (inputCardNumbers.length < 16) {
            setErrorCardNumbers('Wrong format or incomplete card numbers');
            hasErrors = true;
        };

        if (inputMonth === '') {
            setErrorDateMM("Can't be blank");
            hasErrors = true;
        } else if (/^\d{1,2}$/.test(inputMonth)) {
            let monthNumber = parseInt(inputMonth, 10);

            // ✅ Validate that the month is in the range of 1 to 12.
            if (monthNumber >= 1 && monthNumber <= 12) {
                setErrorDateMM('');
            } else {
                setErrorDateMM('Enter a valid month');
                hasErrors = true;
            }
        }

        if (inputYear === '') {
            setErrorDateYY("Can't be blank");
            hasErrors = true;
        } else if (/^\d{1,2}$/.test(inputYear)) {
            let yearNumber = parseInt(inputYear, 10);

            // ✅ Validate that the  month is in the acceptable range, for example from the current year to 10 years in the future. 
            if (yearNumber >= currentYear % 100 && yearNumber <= currentYear % 100 + 10) {
                setErrorDateYY('');
            } else {
                setErrorDateYY('Enter a valid year');
                hasErrors = true;
            }
        }

        if (inputCVC === '') {
            setErrorCVC("Can't be blank");
            hasErrors = true;
        } else if (inputCVC.length < 3) {
            setErrorCVC("Enter a valid CVC");
            hasErrors = true;
        }

        // 📍 Make sure there are no errors, and if there aren't, hide form.
        !hasErrors && setFormVisible(false);
    }

    return (
        <>
            <MainContainer onSubmit={handleSubmit}>
                <FormContainer>
                    <Label gridColumn='1 / 3' gridRow='1' >Cardholder name</Label>
                    <Input
                        type='text'
                        gridColumn="1 / 3"
                        gridRow='2'
                        inputLarge
                        placeholder='e.g. Jane Appleseed'
                        onChange={handleNameChange}
                        value={inputName}
                        inputError={errorCardName}
                    />

                    <Label gridColumn="1 / 3" gridRow='4' >Card number</Label>
                    <Input
                        gridColumn='1 / 3'
                        gridRow='5'
                        inputLarge
                        placeholder='e.g. 1234 5678 9123 0000'
                        onChange={handleCardNumber}
                        value={inputCardNumbers}
                        inputError={errorCardNumbers}
                        maxLength='16'
                    />

                    <Label gridRow='7'>EXP. DATE (MM/YY)</Label>
                    <Input
                        name='month'
                        type='text'
                        inputMode='numeric'
                        gridColumn='1'
                        gridRow='8'
                        inputShort
                        placeholder='MM'
                        maxLength='2'
                        value={inputMonth}
                        onChange={handleDateAndCVC}
                    />

                    <Input
                        name='year'
                        type='text'
                        inputMode='numeric'
                        gridColumn='1'
                        gridRow='8'
                        marginLeft
                        inputShort
                        placeholder='YY'
                        value={inputYear}
                        onChange={handleDateAndCVC}
                    />

                    <Label gridRow='7'>CVC</Label>
                    <Input
                        name='ccv'
                        type='text'
                        inputMode='numeric'
                        gridColumn='2'
                        gridRow='8'
                        inputMedium
                        placeholder='e.g. 123'
                        value={inputCVC}
                        onChange={handleDateAndCVC}
                    />

                    {/* ❌ Error Label */}
                    {errorCardName &&
                        <Label gridRow='3' gridColumn='1'
                            style={{ textTransform: 'none', color: 'red', fontSize: '1rem' }}
                        >
                            {errorCardName}
                        </Label>
                    }

                    {/* ❌ Error Label */}
                    {errorCardNumbers &&
                        <Label gridRow='6' gridColumn='1 / 3'
                            style={{ textTransform: 'none', color: 'red', fontSize: '1rem' }}
                        >
                            {errorCardNumbers}
                        </Label>
                    }

                    {/* ❌ Error Label */}
                    {errorDateMM &&
                        <Label gridRow='9' gridColumn='1'
                            style={{
                                textTransform: 'none',
                                color: 'red',
                                marginRight: '1rem',
                                width: '40%',
                                textAlign: 'center',
                                fontSize: '1rem',
                            }}
                        >
                            {errorDateMM}
                        </Label>
                    }

                    {/* ❌ Error Label */}
                    {errorDateYY &&
                        <Label gridRow='9' gridColumn='1' marginLeft
                            style={{
                                textTransform: 'none',
                                color: 'red',
                                textAlign: 'center',
                                width: '5.5rem',
                                fontSize: '1rem'
                            }}
                        >
                            {errorDateYY}
                        </Label>
                    }

                    {/* ❌ Error Label */}
                    {errorCVC &&
                        <Label gridRow='9' gridColumn='2'
                            style={{
                                textTransform: 'none',
                                color: 'red',
                                fontSize: '1rem'
                            }}
                        >
                            {errorCVC}
                        </Label>
                    }

                </FormContainer>

                <Button type='submit'>Confirm</Button>

            </MainContainer>
        </>
    );
}

export default Form;