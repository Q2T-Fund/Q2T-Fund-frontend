
export const fetchUniqueStringForLogin = () => {
    return fetch(`${process.env.REACT_APP_DITO_API_URL}/api/skillwallet/authString`, {
        method: 'GET'
    })
        .then(res => res.json());
};
export const checkSuccessfulLogin = (uniqueString) => {
    return fetch(`${process.env.REACT_APP_DITO_API_URL}/api/skillwallet/login?uniqueString=${uniqueString}`, {
        method: 'GET'
    })
        .then(res => res.json());
};


export const getSkillWallet = (tokenId) => {
    return fetch(`${process.env.REACT_APP_DITO_API_URL}/api/skillwallet?tokenId=${tokenId}`, {
        method: 'GET'
    })
        .then(res => res.json());
};