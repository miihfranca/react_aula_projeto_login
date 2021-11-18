import React from 'react';
import Image from './redesocial.png'
import './Login.css';

export default function Login(){

    return(
        <div className='container'>

            <div className='imagem'>
                <img alt='foto principal' src={ Image } />
            </div>

            <form className='form'>
                <div>
                    <h3>Member Login</h3>
                </div>
                
                <div className='usuario'>
                    <input type='email' name='username' placeholder='Email' />
                </div>

                <div className='senha'>
                    <input type='password' name='senha' placeholder='Password' />
                </div>

                <button className='botao'>LOGIN</button>

                <div>        
                    <p>Esqueceu a senha ?</p>
                </div>
            </form>
        </div>
    );
}