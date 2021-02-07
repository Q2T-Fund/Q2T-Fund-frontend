
export const fetchCommunity = (communityID) => {
    return fetch(`${process.env.REACT_APP_DITO_API_URL}/api/community/${communityID}`, {
      method: 'GET',
      headers: new Headers({
        skillWalletID:localStorage.getItem('skillWalletID')
      }),
    })
      .then(res => res.json());
  };


export const fetchUser = () => {
  return fetch(`${process.env.REACT_APP_DITO_API_URL}/api/user`, {
    method: 'GET',
    headers: new Headers({
      skillWalletID:localStorage.getItem('skillWalletID')
    }),
  })
    .then(res => res.json());
};