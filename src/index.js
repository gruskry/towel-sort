
module.exports = function towelSort (matrix) {
  if (matrix == undefined || matrix.length === 0) return [];
  if (matrix.length == 1) return matrix;

  let res =  [];
  let o = 2;

  for (let a = 0; a < matrix.length; a++) {
        for (let b = 0; b < matrix[a].length; b++) {
            if (a == 0 || a % o == 0) {
                res.push(matrix[a][b]);
            }
                else {
                res.push(matrix[a][matrix[a].length - 1 - b]);
                }
        }
    }
        return res;
}
   
 
