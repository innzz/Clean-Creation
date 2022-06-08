import React from "react";
import styles from "../../styles/component-styles/Meal-styles/Random.module.css";
import { ProgressBar, Table } from "react-bootstrap";
export default class MyMacronutrients extends React.Component {
    render() {
        return (
            <div className="lg:mx-5 mx-2">
                <div className="border p-0 rounded-xl shadow w-80 lg:w-96 h-full gap-3">
                    <div className="p-8">
                        <div className={styles.dietHolder}>
                            <div className={styles.dietName}>
                                <h3>Calories</h3>
                                <p>
                                    <span>0 cal</span> (0)
                                </p>
                            </div>
                            <div>
                                <ProgressBar className={styles.dietBar} />
                            </div>
                        </div>

                        {/* //////////////////////////////////////////////// */}

                        <div className={styles.dietHolder}>
                            <div className={styles.dietName}>
                                <h3>Total Fat</h3>
                                <p>
                                    <span>0.00 gr</span>(0)
                                </p>
                            </div>
                            <div>
                                <ProgressBar className={styles.dietBar} />
                            </div>
                            <div className={styles.innerDietHolder}>
                                <div className={styles.innerDiet}>
                                    <h4>Saturated Fat</h4>
                                    <p>0 cal (0)</p>
                                </div>
                                <div>
                                    <ProgressBar className={styles.dietBar} />
                                </div>
                            </div>
                        </div>

                        {/* //////////////////////////////////////////////// */}

                        <div className={styles.dietHolder}>
                            <div className={styles.dietName}>
                                <h3>Cholesterol</h3>
                                <p>
                                    <span>0.00 mg</span> (0)
                                </p>
                            </div>
                            <div>
                                <ProgressBar className={styles.dietBar} />
                            </div>
                        </div>

                        {/* //////////////////////////////////////////////// */}

                        <div className={styles.dietHolder}>
                            <div className={styles.dietName}>
                                <h3>Sodium</h3>
                                <p>
                                    <span>0.00 mg</span> (0)
                                </p>
                            </div>
                            <div>
                                <ProgressBar className={styles.dietBar} />
                            </div>
                        </div>

                        {/* //////////////////////////////////////////////// */}

                        <div className={styles.dietHolder}>
                            <div className={styles.dietName}>
                                <h3>Total Carbohydrates</h3>
                                <p>
                                    <span>0.00 gr</span>(0)
                                </p>
                            </div>
                            <div>
                                <ProgressBar className={styles.dietBar} />
                            </div>
                            <div className={styles.innerDietHolder}>
                                <div className={styles.innerDiet}>
                                    <h4>Dietary Fiber</h4>
                                    <p>0.00 gr (0)</p>
                                </div>
                                <div>
                                    <ProgressBar className={styles.dietBar} />
                                </div>
                            </div>
                            {/* /// */}
                            <div className={styles.innerDietHolder}>
                                <div className={styles.innerDiet}>
                                    <h4>Total Sugars</h4>
                                    <p>0.00 gr (0)</p>
                                </div>
                                <div>
                                    <ProgressBar className={styles.dietBar} />
                                </div>
                            </div>
                            {/* // */}
                            <div className={styles.innerDietHolder}>
                                <div className={styles.innerDiet}>
                                    <h4>Included sugars</h4>
                                    <p>0.00 gr (0)</p>
                                </div>
                                <div>
                                    <ProgressBar className={styles.dietBar} />
                                </div>
                            </div>
                        </div>

                        {/* ///////////////////////////////// */}

                        <div className={styles.dietHolder}>
                            <div className={styles.dietName}>
                                <h3>Protein</h3>
                                <p>
                                    <span>0.00 gr</span> (0)
                                </p>
                            </div>
                            <div>
                                <ProgressBar className={styles.dietBar} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}