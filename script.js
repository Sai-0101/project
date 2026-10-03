
// Declarative Event Management Component Selectors
        const homeView = document.getElementById('homeView');
        const subPageView = document.getElementById('subPageView');
        const goBackBtn = document.getElementById('goBackBtn');
        const exploreBtn = document.getElementById('exploreBtn');
        const physicalHomeBtn = document.getElementById('physicalHomeBtn');
        

        // Central Application Navigation UI Active Controller State Function Core
        function changeInterfaceState(targetNode) {
            if (targetNode === 'home') {
                subPageView.classList.remove('active-view');
                homeView.classList.add('active-view');
                goBackBtn.disabled = true; // Block historical step actions out from home origin
            } else if (targetNode === 'subpage') {
                homeView.classList.remove('active-view');
                subPageView.classList.add('active-view');
                goBackBtn.disabled = false; // Open historical reverse action parameters
            }
        }

        // Add User Input Event Observers to DOM Element Instances
        exploreBtn.addEventListener('click', () => {
            changeInterfaceState('subpage');
        });

        goBackBtn.addEventListener('click', () => {
            changeInterfaceState('home');
        });

        // The lower circle mechanical frame button will completely reset the runtime viewing stack array parameters
        physicalHomeBtn.addEventListener('click', () => {
            changeInterfaceState('home');
        });

      