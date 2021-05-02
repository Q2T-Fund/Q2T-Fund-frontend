
export const getProjects = (communityAddress) => {
  return fetch(`${process.env.REACT_APP_DITO_API_URL}/api/community/${communityAddress}/project`, {
    method: 'GET'
  })
    .then(res => res.json());
};


export const getMilestones = (communityAddress, projectId) => {
  return fetch(`${process.env.REACT_APP_DITO_API_URL}/api/community/${communityAddress}/project/${projectId}/milestones`, {
    method: 'GET'
  })
    .then(res => res.json());
};

export const createMilestone = (communityAddress, projectId, milestone) => {
  return fetch(`${process.env.REACT_APP_DITO_API_URL}/api/community/${communityAddress}/project/${projectId}/milestone`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
    }),
    body: JSON.stringify(milestone),
  })
    .then(res => res.json());
}