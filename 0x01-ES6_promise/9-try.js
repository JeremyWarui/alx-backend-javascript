export default function guardrail(mathFunction) {
  const queue = [];
  let answer;
  try {
    answer = mathFunction();
    // queue.push(answer);
  } catch (error) {
    error.message = error.message.replace(/message /, '');
    answer = error.toString();
    // queue.push(answer);
  } finally {
    queue.push(answer);
    queue.push('Guardrail was processed');
  }
  return queue;
}
