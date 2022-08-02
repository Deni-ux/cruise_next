import { data } from "../../data";

const Cruises = ({cruise}) => {
  return (
      <div>
          {cruise.map(cruise => (
              <div key={cruise.id}>{cruise.name}</div>
          ))}
    </div>
  )
}


//create a new path for each new route
export const getStaticPaths = async () => {
    const cruises = data;
    const paths = cruises.map(item => {
        return {
            params: { name: item.name }
        }
    });

    return {
        paths,
        fallback:false
    }
}

//fetch my data
export const getStaticProps = async (context) => {
    const name = context.params.name;
    const cruise = data.filter((item) => item.name === name)[0]

    return {
        props: {cruise},
        }

}


export default Cruises;