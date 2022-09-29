export const getCandidateAuthHeader = () => {
    const token = localStorage.getItem('ud');
    const header = {
      headers: { Authorization: "Bearer " + token },
    };
    return header;
  };
  