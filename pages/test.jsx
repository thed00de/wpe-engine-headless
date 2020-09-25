const Static = ({ staticProp }) => <h1>This page is static {staticProp}</h1>;

export async function getStaticProps(context) {
    return {
      props: {
          staticProp: 'Test'
      }, // will be passed to the page component as props
    }
}

export default Static;