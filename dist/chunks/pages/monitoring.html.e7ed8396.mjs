/* empty css                                 */
function render({ slots: ___SLOTS___ }) {
		return `<!DOCTYPE html>
<html lang="fr" style="background-color: hsl(0, 0%, 0%);">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Monitoring</title>
    <link href="style.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500&amp;display=swap"
        rel="stylesheet">

</head>

<body style="font-family:Manrope; margin-left: 50px;margin-right: 50px;">
    <h1 style="color:hsl(189, 87%, 97%);">Monitoring GDA</h1>
    <p style="color: hsl(0, 0%, 67%);">Tableau de bord dynamique pour le monitoring en temps réel du call center de
        Carrefour</p>

    <div class="text" style="display:flex;  margin-top: 4%;">
        <img src="/public/monitoring.png" alt="Photo du projet"
            style="max-width: 50%; height: auto; margin-bottom: 20px;">
        <div style="margin-left: 150px;">
            <p style="color:hsl(0, 0%, 67%);line-height: 27px;">"Mon projet consistait à répondre à un besoin crucial :
                concevoir un
                <strong style="color:white;">tableau de bord dynamique</strong> capable
                d'afficher
                en temps réel l'ensemble des appels en cours du call center de Carrefour. Ce tableau de bord était
                destiné à être intégré en tant que composant essentiel au sein d'une application déjà développée par mon
                maître de stage précédent.
                L'objectif principal était de créer une <strong style="color:white;">interface intuitive et réactive
                </strong>permettant une
                visualisation
                instantanée des
                activités en cours du call center. Ce 'monitor' devait être synchronisé en temps réel avec les données
                provenant de
                l'application principale, fournissant ainsi une vision globale des appels en cours, des statistiques et
                des indicateurs
                clés de performance.Mon rôle a été de <strong style="color:white;">conceptualiser, développer et mettre
                    en œuvre
                </strong>cette
                solution en
                accord avec les spécifications fournies, tout en veillant à son intégration harmonieuse dans
                l'écosystème de l'application existante."
            </p>
        </div>
    </div>

    //Second Bloc

    <div class="text" style="display:flex;justify-content: end;">
        <div style="margin-right: 150px;">
            <h3 style="color:hsl(189, 87%, 97%);">Technologies utilisées :</h3>
            <ul style="color:hsl(0, 0%, 67%);">
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>SQL</li>
                </br>
                <li>BigQuery</li>
                <li>GCP</li>
                <li>Figma</li>

            </ul>
            <h3 style="color:hsl(189, 87%, 97%);">Compétences validées :</h3>
            <ul style="color:hsl(0, 0%, 67%);line-height: 30px;">
                <li>Analyser les objectifs et les modalités d’organisation d’un projet</li>
                <li>Planifier les activités</li>
                <li>Évaluer les indicateurs de suivi d’un projet et analyser les écarts</li>
                <li>Réaliser les tests d’intégration et d’acceptation d’un service</li>
                <li>Accompagner les utilisateurs dans la mise en place d’un service</li>
                <li>Collecter, suivre et orienter des demandes</li>
                <li>Traiter des demandes concernant les applications</li>
                <li>Exploiter des référentiels, normes et standards adoptés par le prestataire informatique</li>
                <li>Gérer des sauvegardes</li>
            </ul>
        </div>
        <img src="/public/CaptureCodeGDA.PNG" alt="Photo du projet"
            style="max-width: 50%; height: auto; margin-bottom: 20px;margin-left: 150px;">
    </div>
</body>

</html>`
	}
render["astro:html"] = true;

export { render as default };
