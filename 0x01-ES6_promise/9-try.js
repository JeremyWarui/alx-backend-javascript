export default function guardrail(mathFunction) {
  const queue = [];
  let answer;
  try {
    answer = mathFunction();
  } catch (error) {
    answer = error.toString();
  }
  queue.push(answer);
  queue.push('Guardrail was processed');
  return queue;
}
