import styles from '../../styles/footer.module.css'
function Footer({header}){
    return(
      <footer className={styles.footer}>
      <div className= "container text-center text-white">
        <span className='white' > Next Js </span>
      </div>
    </footer>
    )
}
export default Footer