import { chargesApi } from "./main-endpoint";

// ------------------------------------------------------------
// ----------------------- Rental charges----------------------
// ------------------------------------------------------------

export const fetchRentalCharges = (callback) => {
  fetch(`${chargesApi}/plans/storage-rental-charges/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return res.json();
    })
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
      console.log("Fetch error", err);
    });
};
// ------------------------------------------------------------
// ----------------------- Web update charges------------------
// ------------------------------------------------------------

export const fetchWebupdateCharges = (callback) => {
  fetch(`${chargesApi}/plans/website-update-charges/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return res.json();
    })
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    });
};

// ------------------------------------------------------------
// ----------------------- App update charges------------------
// ------------------------------------------------------------

// export const fetchAppupdateCharges = (callback) => {
//   fetch(`${chargesApi}`);
// };
