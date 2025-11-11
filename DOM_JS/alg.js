document.getElementById('containerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const A=parseFloat(document.getElementById('cubeEdge').value);
  const R=parseFloat(document.getElementById('cylRadius').value);
  const H=parseFloat(document.getElementById('cylHeight').value);
  const M=parseFloat(document.getElementById('volumeM').value);

  const volumeCube=A**3;
  const volumeCylinder = Math.PI*R**2*H;

  const canFillCube=M<=volumeCube;
  const canFillCylinder=M<=volumeCylinder;
  const canFillBoth=M<=(volumeCube + volumeCylinder);

  let resultText='';

  if (canFillCube && !canFillCylinder) {
    resultText='Жидкостью можно заполнить кубическую ёмкость.';
  } else if (!canFillCube && canFillCylinder) {
    resultText='Жидкостью можно заполнить цилиндрическую ёмкость.';
  } else if (canFillCube && canFillCylinder) {
    resultText='Жидкостью можно заполнить любую ёмкость.';
  } else if (canFillBoth) {
    resultText='Жидкостью можно заполнить обе ёмкости.';
  } else {
    resultText='Жидкостью нельзя заполнить ни одну ёмкость, ни обе.';
  }

  document.getElementById('result').textContent = resultText;
});
