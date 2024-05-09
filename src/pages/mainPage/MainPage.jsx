import React from 'react';
import {useForm} from 'react-hook-form';
import axios from 'axios';


export function MainPage() {

    const {register,
           handleSubmit,
           reset,
           getValues,
           formState: {errors}
    } = useForm({
    });

    const submit = (values) => {
        let url = 'https://jsonplaceholder.typicode.com/users'
        axios.post (url, JSON.stringify(values))
            .then(response => console.log(response.data))
    }

    return (
        <div>
            <h1>Main page</h1>

            <form onSubmit={handleSubmit(submit)} className='form'>

                <label>
                    <p>name*</p>
                    <input type="text" {...register('name', { required: true })}
                    className={errors.name && "errorBorder"}/>
                    <small>{errors.name && 'обязательное поле ввода'}</small>
                </label>

                <label>
                    <p>username*</p>
                    <input type="text" {...register('username', {required: true})}
                           className={errors.username && "errorBorder"}/>
                    <small>{errors.username && 'обязательное поле ввода'}</small>
                </label>

                <label>
                    <p>email*</p>
                    <input type="text" {...register('email', {required: true})}
                           className={errors.email && "errorBorder"}/>
                    <small>{errors.email && 'обязательное поле ввода'}</small>
                </label>

                <label>
                    <p>phone</p>
                    <input type="tel" {...register('phone', {minLength: 5})}/>
                </label>

                <label>
                    <p>website</p>
                    <input type="text" {...register('website')}/>
                </label>

                <button type='button'
                        onClick={() => {
                            const getMyObj = getValues()//obj
                            console.log(getMyObj)
                            submit(getMyObj)//funciya submit otpravila object

                            reset ({
                                name: '',
                                username: '',
                                email: '',
                                phone: '',
                                website: ''
                            })
                        }}>добавить</button>

            </form>
        </div>
    );
}

