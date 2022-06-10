import React from "react";
import styles from "../../styles/component-styles/About/CrunchClean.module.css";

const StopStressing = () => {
  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div>
            <div className={styles.imgContainer}>
              <img src="/small.jpg" alt="" />
            </div>
          </div>
          <div className={styles.description}>
            <h2>Cut Down on Grocery Shopping and Order À La Carte</h2>
            <p>
              We do all of the shopping, preparation, and washing-up so you
              don’t have to, and the journey from our kitchen to your table
              starts with our high-quality ingredients. We know the grocery
              store can be a headache, so we do all the shopping for you, taking
              the time to source fresh ingredients. With BookOnePos, Baton
              Rouge, you never have to worry about accidentally buying an
              overripe avocado or letting your berries go bad in the fridge. We
              hand-select the best ingredients available, then we prepare them
              for you so all you have to do is enjoy! À La Carte and save
              yourself some time!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopStressing;
