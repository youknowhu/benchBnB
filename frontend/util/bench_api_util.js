export const fetchBenches = () => {
  return $.ajax({
    url: 'api/benches',
    method: 'GET',
    errors: (err) => console.log(err)
  });
};
