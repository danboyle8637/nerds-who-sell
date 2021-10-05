export const TestComponent = () => {
  const styles = {
    padding: "20px",
    backgroundColor: "orange",
    width: "200px",
    height: "150px",
  };

  return (
    <>
      <h1>Other Component</h1>
      <div style={styles} />
    </>
  );
};
