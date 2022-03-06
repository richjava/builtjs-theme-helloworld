export default function Cover1({ content }) {
  console.log({content});
  let { attributes, collections } = { ...content };
  let greetings = [];
  if (collections && collections["greetings"]) {
    greetings = collections["greetings"].items;
  }
  return (
    <section>
      <h1>{attributes.heading}</h1>
      {greetings.map((greeting) => (
        <p>{greeting.attributes.label}</p>
      ))}
    </section>
  );
}