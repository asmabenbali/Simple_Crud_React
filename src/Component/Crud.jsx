import { useState } from "react"; 
import "./styles.css"

export default function Crud() {
    const [nom, setNom] = useState("");
    const [prénom, setPrénom] = useState("");
    const [email, setEmail] = useState("");
    const [ville, setVille] = useState("");
    const [filliere, setFilliere] = useState("");
    const [error, setError] = useState("");
    const [tableD, setTableD] = useState([]);

    const ButtonsClick = () => {
        if (!email.includes("@") || !email.endsWith("gmail.com")) {
            setError("S'il vous plaît, faites attention à votre email.");
        } else {
            const newRow = { nom, prénom, email, ville, filliere };
            setTableD([...tableD, newRow]);
            setNom("");
            setPrénom("");
            setEmail("");
            setVille("");
            setFilliere("");
            setError(""); // Réinitialiser le message d'erreur
        }
    };

    const deleteRow = (index) => {
        const newTableD = tableD.filter((_, i) => i !== index);
        setTableD(newTableD);
    };

    return (
        <>
           <h1 className="title">Crud systeme</h1>
            <div>
                nom : <input type="text" value={nom} onChange={(e) => setNom(e.target.value)} />
            </div>
            <div>
                prénom : <input type="text" value={prénom} onChange={(e) => setPrénom(e.target.value)} />
            </div>
            <div>
                email : 
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {error && <div style={{ color: "red", marginTop: "5px" }}>{error}</div>} {/* Message d'erreur */}
            </div>
            <div >
                <select value={ville} onChange={(e) => setVille(e.target.value)}>
                    <option>Agadir</option>
                    <option>Ouarzazate</option>
                    <option>Marrakech</option>
                    <option>Casablanca</option>
                </select>
            </div>
            <div >
                <select value={filliere} onChange={(e) => setFilliere(e.target.value)}>
                    <option>développement informatique</option>
                    <option>gestion des entreprises</option>
                    <option>génie civil</option>
                    <option>réseau</option>
                </select>
            </div>
            <button onClick={ButtonsClick}>Ajouter</button>

            <table border="1px solid">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Email</th>
                        <th>Ville</th>
                        <th>Filière</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableD.map((row, index) => (
                        <tr key={index}>
                            <td>{row.nom}</td>
                            <td>{row.prénom}</td>
                            <td>{row.email}</td>
                            <td>{row.ville}</td>
                            <td>{row.filliere}</td>
                            <td>
                                <button onClick={() => deleteRow(index)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
