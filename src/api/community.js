
export const getProjects = (communityAddress) => {
  return fetch(`${process.env.REACT_APP_DITO_API_URL}/api/community/${communityAddress}/project`, {
    method: 'GET'
  })
    .then(res => res.json());
};


export const getMilestones = (projectId) => {
  return fetch(`${process.env.REACT_APP_DITO_API_URL}/api/community/projects/${projectId}/milestone`, {
    method: 'GET'
  })
    .then(res => res.json());
};

export const createMilestone = (projectId, url, ditoCredits, skillWalletId) => {
  return fetch(`${process.env.REACT_APP_DITO_API_URL}/api/community/projects/${projectId}/milestone`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify({url, ditoCredits, skillWalletId}),
  })
    .then(res => res.json());
}