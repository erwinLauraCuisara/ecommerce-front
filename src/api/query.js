
export const get = async (url) => {
    return fetch(url, {
        method: 'GET',
      });
};

export const post = async (url, body) => {
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
};

export const put = async (url, body) => {
    return await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
};

export const remove = async (url, body) => {
    return await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
};