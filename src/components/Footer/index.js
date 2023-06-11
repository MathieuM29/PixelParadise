import './style.css';

function Footer() {
  return (
    <footer className="footer">
          <div className='footerContainer'>
              <div className='linkList'>
                <ul>
                  <li>Accueil</li>
                  <li>Composants</li>
                  <li>Contact</li>
                  <li>Profil</li>
                </ul>  
              </div>
              <div className='generalConditionContainer'>
                  <ul className='generalConditionList'>
                    <li>Condition Générale de Vente</li>
                    <li>Condition Générale d'utilisation</li>
                  </ul>
              </div>
              <div className='logo'>
               
              </div>
          </div>
    </footer>
  );
}

export default Footer;