// src/utils/api.js
const API_BASE_URL = 'http://localhost:8080/api';

export const addressApi = {
  // 주소 검증 API 호출
  validateAddress: async (keyword) => {
    try {
      const response = await fetch(`${API_BASE_URL}/address/validate?keyword=${encodeURIComponent(keyword)}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('주소 검증 API 호출 오류:', error);
      throw error;
    }
  },

  // POST 방식으로도 호출 가능
  validateAddressPost: async (requestData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/address/validate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('주소 검증 API 호출 오류:', error);
      throw error;
    }
  }
};
