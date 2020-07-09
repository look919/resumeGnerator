import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from './../utils/setAuthToken';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_OPTION_SUCCESS,
  UPDATE_OPTION_FAIL,
} from './types';

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/v1/users/auth');

    dispatch({
      type: AUTH_SUCCESS,
      payload: res.data.user,
    });
  } catch (err) {
    console.log(err);

    dispatch({
      type: AUTH_FAIL,
    });
  }
};

//register User
export const register = ({ email, password, passwordConfirm }) => async (
  dispatch
) => {
  const body = JSON.stringify({
    email,
    password,
    passwordConfirm,
  });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/v1/users/signup', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert('Account created successfully', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));
    console.log(err.response);
    dispatch({
      type: REGISTER_FAIL,
      payload: err.message,
    });
  }
};

//login user
export const login = ({ email, password }) => async (dispatch) => {
  const body = JSON.stringify({ email, password });
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post('/api/v1/users/login', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(setAlert('Successfully log in', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));
    dispatch({
      type: LOGIN_FAIL,
      payload: err.message,
    });
  }
};

//logout user
export const logout = () => async (dispatch) => {
  try {
    await axios.post('/api/v1/users/logout');
    dispatch({
      type: LOGOUT,
    });
    dispatch(setAlert('Successfully logout', 'success'));
  } catch (err) {
    dispatch(setAlert(err.response.data.message, 'danger'));
  }
};
//update generalInfo
export const generalInfoUpdate = ({
  name,
  profession,
  photo,
  phone,
  email,
  address,
  website,
  summary,
  company,
}) => async (dispatch) => {
  const formData = new FormData();
  if (photo) formData.append('photo', photo);
  formData.append('name', name);
  formData.append('profession', profession);
  formData.append('phone', phone);
  formData.append('emailField', email);
  formData.append('address', address);
  formData.append('website', website);
  formData.append('summary', summary);
  formData.append('company', company);

  // for (var pair of formData.entries()) {
  //   console.log(pair[0] + ', ' + pair[1]);
  // }

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.patch('/api/v1/users/updateMe', formData, config);

    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: res.data.data.user,
    });
    dispatch(setAlert('Data Saved', 'success'));
  } catch (err) {
    dispatch(setAlert('Data could not be saved', 'danger'));
    console.log(err.response);
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: err.message,
    });
  }
};

export const educationUpdate = ({
  educationOneSpeciality,
  educationOneSchool,
  educationOneStartDate,
  educationOneEndDate,
  educationTwoSpeciality,
  educationTwoSchool,
  educationTwoStartDate,
  educationTwoEndDate,
  languagesOneLang,
  languagesOneLevel,
  languagesTwoLang,
  languagesTwoLevel,
  certificateOne,
  certificateTwo,
}) => async (dispatch) => {
  const body = JSON.stringify({
    education: [
      {
        speciality: educationOneSpeciality,
        school: educationOneSchool,
        startDate: educationOneStartDate,
        endDate: educationOneEndDate,
      },
      {
        speciality: educationTwoSpeciality,
        school: educationTwoSchool,
        startDate: educationTwoStartDate,
        endDate: educationTwoEndDate,
      },
    ],
    languages: [
      {
        lang: languagesOneLang,
        level: languagesOneLevel,
      },
      {
        lang: languagesTwoLang,
        level: languagesTwoLevel,
      },
    ],
    certification: [certificateOne, certificateTwo],
  });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.patch('/api/v1/users/updateMe', body, config);
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: res.data.data.user,
    });
    dispatch(setAlert('Data Saved', 'success'));
  } catch (err) {
    dispatch(setAlert('Data could not be saved', 'danger'));
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: err.message,
    });
  }
};
export const skillsUpdate = (data) => async (dispatch) => {
  if (data.length <= 12) {
    const body = JSON.stringify({
      skills: data,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.patch('/api/v1/users/updateMe', body, config);
      dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: res.data.data.user,
      });
      dispatch(setAlert('Data Saved', 'success'));
    } catch (err) {
      dispatch(setAlert('Data could not be saved', 'danger'));
      dispatch({
        type: UPDATE_USER_FAIL,
        payload: err.message,
      });
    }
  } else dispatch(setAlert('Maximum 12 skills can be added', 'danger'));
};
export const projectsUpdate = ({
  projectOneName,
  projectOneLink,
  projectOneDesc,
  projectTwoName,
  projectTwoLink,
  projectTwoDesc,
  projectThreeName,
  projectThreeLink,
  projectThreeDesc,
}) => async (dispatch) => {
  const body = JSON.stringify({
    projects: [
      {
        name: projectOneName,
        url: projectOneLink,
        description: projectOneDesc,
      },
      {
        name: projectTwoName,
        url: projectTwoLink,
        description: projectTwoDesc,
      },
      {
        name: projectThreeName,
        url: projectThreeLink,
        description: projectThreeDesc,
      },
    ],
  });

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.patch('/api/v1/users/updateMe', body, config);
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: res.data.data.user,
    });
    dispatch(setAlert('Data Saved', 'success'));
  } catch (err) {
    dispatch(setAlert('Data could not be saved', 'danger'));
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: err.message,
    });
  }
};

export const optionUpdate = (data) => async (dispatch) => {
  try {
    localStorage.setItem('option', data);
    dispatch({
      type: UPDATE_OPTION_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: UPDATE_OPTION_FAIL,
      payload: err.message,
    });
  }
};
