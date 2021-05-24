import React, { Component } from "react";
import { Header } from "../Header/Header";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import "./SchritThree.css";

export class SchritThree extends Component {

    render() {
        return (
            <div className="container">
                <Header firmenname="test firma" gewerk="test gewerk" />
                <div className="data-wrapper-wrapper">
                    <div className="data-wrapper">
                        <div className="data-label">
                            <h5>Mangel erfassung</h5>
                            <h6>Hier bitte die Info über der Mangel  der Firma einfügen </h6>
                        </div>
                        <div className="data-input">
                            <label htmlFor="auftrag-geber">Auftraggeber Stromnetz</label>
                            <br />
                            <input type="text" name="auftrag-geber" />
                            <br />
                            <label htmlFor="arbeitsveratworlicher">Arbeitsverantwortlicher Firma / Stromnetz Berlin</label>
                            <br />
                            <input type="text" name="arbeitsveratworlicher" />
                            <br />
                            <label htmlFor="bestell-nummer">Bestellnummer</label>
                            <br />
                            <input type="text" name="bestell-nummer" />
                        </div>
                    </div>
                    <div className="data-wrapper">
                        <div className="data-label">
                            <h5>Datum des Mangels</h5>
                            <h6>Hier bitte das Datum des Mangels einfügen </h6>
                        </div>
                        <div className="data-input">
                            <input type="date" name="mangel-datum" />
                        </div>
                    </div>
                    <div className="data-wrapper">
                        <div className="data-label">
                            <h5>Bereich des Mitarbeiters</h5>
                            <h6>Hier bitte der Bereich  des Mangels in der Firma einfügen </h6>
                        </div>
                        <div className="data-input">
                            <label htmlFor="bereich">Bereich</label>
                            <br />
                            <select name="bereich">
                                <option>test</option>
                            </select>
                            <br />
                            <br />
                            <label htmlFor="status">Mängelstatus</label>
                            <br />
                            <select name="status">
                                <option>test</option>
                                <option>test1</option>
                            </select>
                        </div>
                    </div>
                    <div className="data-wrapper">
                        <div className="data-label">
                            <h5>Kontrakt</h5>
                            <h6>jetzt kann auch die Kontraktnummer erfasst werden. es werden erst die gütligen Kontarkte angezeigt. Zusätzlich können auch alle Kontrakte eingeblendet werden. auch manuell kann ein Kontraktnummer eingegeben werden</h6>
                        </div>
                        <div className="data-input">
                            <input type="checkbox" name="all-contracts" />
                            <label htmlFor="all-contracts">Alle Kontrakte anzeigen</label>
                            <br />
                            <br />
                            <label htmlFor="contract">einen Kotrakt wählen:</label>
                            <br />
                            <select name="contract">
                                <option>kontrakt1</option>
                                <option>kontrakt2</option>
                            </select>
                        </div>
                    </div>
                    <div className="data-wrapper">
                        <div className="data-label">
                            <h5>Mangelart</h5>
                            <h6>Hier bitte der Mangelart kreuzen </h6>
                        </div>
                        <div className="data-input">
                            <input type="checkbox" name="fehlende-psa" />
                            <label htmlFor="fehlende-psa">fehlende / unzureichende PSA</label>
                            <br />
                            <input type="checkbox" name="Verstoss" />
                            <label htmlFor="Verstoss">Verstoß Arbeitssicherheit</label>
                            <br />
                            <input type="checkbox" name="Tiefbau" />
                            <label htmlFor="Tiefbau">Tiefbau</label>
                            <br />
                            <input type="checkbox" name="Verbau" />
                            <label htmlFor="Verbau">Verbau</label>
                            <br />
                            <input type="checkbox" name="Oberflachenwiederherstellung" />
                            <label htmlFor="Oberflachenwiederherstellung">Oberflächenwiederherstellung</label>
                            <br />
                            <input type="checkbox" name="uks" />
                            <label htmlFor="uks">unerlaubtes Kabelschneiden</label>
                            <br />
                            <input type="checkbox" name="Absperrung" />
                            <label htmlFor="Absperrung">Absperrung</label>
                            <br />
                            <input type="checkbox" name="fg" />
                            <label htmlFor="fg">fehlende Genehmigungen</label>
                            <br />
                            <input type="checkbox" name="Beschilderung" />
                            <label htmlFor="Beschilderung">Beschilderung</label>
                            <br />
                            <input type="checkbox" name="Verkehrsfuhrung" />
                            <label htmlFor="Verkehrsfuhrung">Verkehrsführung</label>
                            <br />
                            <input type="checkbox" name="Montagefehler" />
                            <label htmlFor="Montagefehler">Montagefehler</label>
                            <br />
                            <input type="checkbox" name="ta" />
                            <label htmlFor="ta">Terminverzug Ausführung</label>
                            <br />
                            <input type="checkbox" name="tva" />
                            <label htmlFor="tva">Terminverzug Abrechnung</label>
                            <br />
                            <input type="checkbox" name="td" />
                            <label htmlFor="td">Terminverzug Dokumentation</label>
                            <br />
                            <input type="checkbox" name="fd" />
                            <label htmlFor="fd">fehlerhafte Dokumentation</label>
                            <br />
                            <input type="checkbox" name="fa" />
                            <label htmlFor="fa">fehlerhafte Abrechnung</label>
                            <br />
                            <input type="checkbox" name="fud" />
                            <label htmlFor="fud">fehlende/unvollständige Dokumentation</label>
                            <br />
                            <input type="checkbox" name="eb" />
                            <label htmlFor="eb">Erreichbarkeit Bereitschaft</label>
                            <br />
                            <input type="checkbox" name="tbe" />
                            <label htmlFor="tbe">Transport / Be- u. Entladung</label>
                            <br />
                            <input type="checkbox" name="sonstiges" />
                            <label htmlFor="sonstiges">sonstiges</label>
                            <br />
                            <input type="button" name="anh" onClick={this.toggleAnlage} value="Anlage hinzufügen" />
                        </div>
                    </div>
                    <div className="data-wrapper toggler" id="toggler">
                        <div className="data-label">
                            <h5>Anlage hinzufügen</h5>
                        </div>
                        <div className="data-input">
                            <label htmlFor="hauptordner">Hauptordner</label>
                            <br />
                            <select name="hauptordner">
                                <option>mangel1</option>
                                <option>mangel2</option>
                            </select>
                            <br />
                            <br />
                            <label htmlFor="unterordner">Unterordner</label>
                            <br />
                            <select name="unterordner">
                                <option>unterordner1</option>
                                <option>unterordner2</option>
                            </select>
                            <br />
                            <br />
                            <input type="checkbox" name="ub" />
                            <label htmlFor="ub">unbefristet</label>
                            <br />
                            <input type="date" name="gb" className="anlage-db"/>
                            <br />
                            <br />
                            <label htmlFor="vertaulichkeit" className="vertau-label">Vertaulichkeit</label>
                            <br />
                            <label htmlFor="vertaulichkeit" className="vertau-label" >C1  </label>
                            <label htmlFor="vertaulichkeit" className="vertau-label" >C2  </label>
                            <label htmlFor="vertaulichkeit" className="vertau-label">C3   </label>
                            <label htmlFor="vertaulichkeit" className="vertau-label">C4   </label>
                            <br />
                            <input type="radio" name="vertaulichkeit" value="c1"  className="radio-1"/>
                            
                            <input type="radio" name="vertaulichkeit"  value="c2" />

                            <input type="radio" name="vertaulichkeit" value="c3" />
                            <input type="radio" name="vertaulichkeit" value="c4" />
                           <br />
                            <br />
                            <label htmlFor="anlage">Hochladen</label>
                            <input type="file" name="anlage"/>
                        </div>
                    </div>
                    <div className="data-wrapper">
                        <div className="data-label">
                            <h5>Bemerkungen</h5>
                            <h6>Hier bitte der Bemerkungen einfügen</h6>y
                            
                        </div>
                        <div className="data-input">
                            <label htmlFor="ort">Ort/Baustelle/Adresse</label>
                            <br />
                            <input type="text" name="ort" />
                            <br />
                            <label htmlFor="ort">Bemerkungen</label>
                            <br />
                            <textarea name="bemerkungen" rows="4" cols="50" />
                            <br />
                        </div>
                    </div>
                </div>
                <SubmitButton submitButtonEvent={this.#nextButtonAction} text="Speichern" />
            </div>
        );
    }

    toggleAnlage = () => {
        let tog = document.getElementById("toggler");
        if(tog.className.includes("toggler")) {
            tog.className = "data-wrapper";
        } else {
            tog.className += " toggler";
        }
    };

    #nextButtonAction = () => {
        console.log("save");
    }
}
