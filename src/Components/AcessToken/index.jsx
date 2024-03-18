'use client'
import React, { useState, useEffect } from 'react';

const acessToken = () => {
    const loginInfo = {
        nonce: '123456789',
        username: 'BimerAPI',
        client_id: 'BimerAPI',
        senha: '123456',
        password: 'fe55bd6e22edd2889c2ce97cf6215928',
        grant_type: 'password'
    };

    const apiUrl = 'http://localhost:8091';

    const [tokenInfo, setTokenInfo] = useState(null);

    const login = async () => {
        try {
            const response = await fetch(`${apiUrl}/oauth/token`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(loginInfo).toString()
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const responseData = await response.json();
            setTokenInfo(responseData.access_token);

            console.log('Login Efetuado com Sucesso!');

        } catch (error) {
            console.error('Erro ao fazer login:', error.message);
        }
    };



    useEffect(() => {
        login();
        const interval = setInterval(login, 10 * 60 * 1000); 
        return () => clearInterval(interval);
    }, []);
    return (
        <div>

        </div>
    );
};

export default acessToken;
