import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((promiseList) => {
      const outlist = [];
      for (const promise of promiseList) {
        const { status, reason } = promise;
        let { value } = promise;
        if (value === undefined) {
          value = reason;
        }
        outlist.push({
          status,
          value,
        });
      }
      return outlist;
    });
}
