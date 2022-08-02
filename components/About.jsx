
import Image from 'next/image';
import styles from '../styles/About.module.css';





const About = ({ cruises }) => {
  console.log(cruises);
  
  
  return (
      <div className={styles.about}>
      <h1>What is life without Adventures</h1>
      
      <div className={styles.grid}>
        {cruises.map((cruise) =>( 
    
           <div key={cruise.id} className={styles.card}>
                  <Image src={`/img/${cruise.image}`} alt="cruise" className={styles.img} width="100%" height="100%" layout='responsive' objectFit='cover' />
             <h2>{cruise.name}</h2>
             <h4>{cruise.route}</h4>
             <p>{cruise.day} {cruise.date}</p>
             <h3>{cruise.price}</h3>
          </div>
  ))}
          
{/* 
              <div className={styles.card}>
                  <Image src={cru2} alt="cruise" className={styles.img} />
                  <h2>Vision of the Seas</h2>
                  <h4>5 Nights Europe Criuse</h4>
            <p>Saturday 10 Sept 2022</p>
                  <h3>£700</h3>
          </div>

          <div
            className={styles.card}
              >
                  <Image src={cru3} alt="cruise" className={styles.img} />
            <h2>Celebrity Summit</h2>
            <h4>12 Nights North America Criuse</h4>
   <p>Monday 3 Sept 2022</p>
                  <h3>£640</h3>
          </div>

          <div
            className={styles.card}
              >
                  <Image src={cru4} alt="cruise" className={styles.img} />
                  <h2>Celebrity Apex</h2>
                  <h4>12 Nights Mediterranean Criuse</h4>
            <p>Monday 17 Oct 2022</p>
                  <h3>£975</h3>
          </div> */}
        </div> 
      <button className={styles.btn}>DOWNLOAD OUR APP</button>
    </div>
  )
}

export default About;

