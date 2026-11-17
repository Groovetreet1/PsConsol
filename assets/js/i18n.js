/* =========================================================
   PS5Consol — i18n (EN / FR / AR)
   ========================================================= */
(() => {
  "use strict";

  const DICT = {
    en: {
      meta: {
        home: {
          title: "PS5Consol — Play Beyond Limits",
          description: "PS5Consol is a concept showcase of the next generation of play: lightning-fast SSD, ray tracing, 3D audio and the DualSense controller.",
        },
        about: {
          title: "About — PS5Consol",
          description: "The story behind PS5Consol: a fan-made concept built for the love of play.",
        },
        blog: {
          title: "Journal — PS5Consol",
          description: "Essays, guides and love letters to games from the PS5Consol team.",
        },
        store: {
          title: "Store — PS5Consol",
          description: "Consoles, controllers and accessories for the next generation of play.",
        },
        article: {
          title: "Journal — PS5Consol",
          description: "Read the latest from the PS5Consol journal.",
        },
        login: {
          title: "Sign in — PS5Consol",
          description: "Sign in to your PS5Consol profile with a 3D console-style concept login.",
        },
      },
      nav: {
        home: "Home",
        console: "Console",
        games: "Games",
        about: "About",
        blog: "Blog",
        store: "Store",
        reserve: "Reserve yours",
        menu: "Open menu",
        close: "Close menu",
        lang: "Language",
        cart: "Cart",
        login: "Sign in",
      },
      common: {
        readMore: "Read more",
        viewAll: "View all",
        back: "Back",
        skip: "Skip to content",
        email: "Email address",
        home: "Home",
      },
      home: {
        hero: {
          eyebrow: "Next-gen is here",
          title: 'Play <span class="grad-text">beyond</span><br>limits.',
          lead: "Lightning-fast loading, haptic immersion and breath-taking worlds. PS5Consol is your gateway to the next generation of play.",
          cta1: "Explore the console",
          cta2: "See the games",
          stat1: "Ultra-fast SSD",
          stat2: "Up to 4K / 120Hz",
          stat3: "RDNA 2 GPU",
          scroll: "Scroll",
          chip1Title: "Ray tracing",
          chip1Sub: "Real-time reflections",
          chip2Title: "Tempest 3D",
          chip2Sub: "Audio engine",
        },
        marquee: {
          m0: "4K Graphics",
          m1: "120 FPS",
          m2: "Ray Tracing",
          m3: "3D Audio",
          m4: "Haptic Feedback",
          m5: "Ultra-fast SSD",
        },
        console: {
          eyebrow: "The console",
          title: 'Sculpted to <span class="grad-text">perform</span>.',
          lead: "A bold, futuristic silhouette that hides serious engineering. Every curve was designed around airflow, silence and speed — so you can focus on the game, not the machine.",
          check1: "Whisper-quiet cooling with a massive 120 mm fan",
          check2: "Vertical or horizontal — built to fit your setup",
          check3: "Ultra-fast 825 GB custom SSD",
          check4: "4K Blu-ray disc drive option",
          mini1: "Custom AMD Zen 2 CPU",
          mini2: "10.28 TFLOPs RDNA 2 GPU",
          mini3: "16 GB GDDR6 memory",
          caption: "Next-gen hardware",
        },
        features: {
          eyebrow: "Built different",
          title: 'Power you can <span class="grad-text">feel</span>.',
          sub: "Four pillars that change how games look, sound and feel — from the first frame to the last haptic pulse.",
          ssdTitle: "Ultra-high speed SSD",
          ssdDesc: "Near-instant loading and seamless worlds. Jump into a game in seconds, not minutes.",
          hapticsTitle: "DualSense haptics",
          hapticsDesc: "Feel tension in a bowstring, the crunch of gravel, the rain on your skin.",
          rayTitle: "Ray tracing",
          rayDesc: "Real-time reflections and true-to-life shadows, rendered frame by frame.",
          audioTitle: "Tempest 3D audio",
          audioDesc: "Hear where every sound comes from. A full 360° soundscape built for headphones.",
        },
        immersion: {
          eyebrow: "Immersion",
          title: 'Feel every <span class="grad-text">moment</span>.',
          lead: "The DualSense wireless controller goes far beyond rumble. Adaptive triggers push back, haptic feedback speaks in textures, and a built-in mic keeps you in the squad.",
          check1: "Adaptive triggers with dynamic resistance",
          check2: "Haptic feedback for in-game textures",
          check3: "Built-in microphone and speaker",
          check4: "Create button to share your best clips",
        },
        games: {
          eyebrow: "The library",
          title: 'Worlds worth <span class="grad-text">getting lost</span> in.',
          g1: "Norse realms, brutal combat and a story carved in myth.",
          g2: "Hunt colossal machines across a living, breathing frontier.",
          g3: "Photoreal circuits, real physics and the roar of the engine.",
          g4: "Blast through dimensional rifts with a living arsenal.",
          g5: "Master the roster. Every hit lands with weight and feedback.",
          t1: "Action · Adventure",
          t2: "Open World",
          t3: "Racing · Sim",
          t4: "Sci-Fi · Shooter",
          t5: "Fighting",
          b1: "PS5 Exclusive",
          b2: "PS5 Exclusive",
          b3: "4K / 120",
          b4: "PS5 Exclusive",
          b5: "Haptic Ready",
        },
        specs: {
          eyebrow: "Tech specs",
          title: 'Under the <span class="grad-text">shell</span>.',
          lead: "A custom architecture built from the ground up for this generation. Every component was chosen to remove friction between you and the game.",
          cta: "Download full spec sheet",
          r1: "CPU",
          r2: "GPU",
          r3: "Memory",
          r4: "Storage",
          r5: "Throughput",
          r6: "Video",
          r7: "Audio",
          r8: "Disc drive",
        },
        cta: {
          eyebrow: "Get ready",
          title: 'Your next adventure starts <span class="grad-text">now</span>.',
          lead: "Join the list and be the first to know about launches, drops and exclusive bundles.",
          placeholder: "you@example.com",
          button: "Notify me",
          note: "No spam. Unsubscribe anytime.",
        },
        toast: {
          invalid: "Please enter a valid email address.",
          success: "You're on the list — see you on the other side. 🎮",
        },
      },
      footer: {
        tagline: "A concept showcase of next-gen play. Built with love for the craft.",
        explore: "Explore",
        support: "Support",
        follow: "Follow",
        reserve: "Reserve",
        newsletter: "Newsletter",
        warranty: "Warranty",
        contact: "Contact",
        disclaimer: "Fan-made concept, not affiliated with Sony Interactive Entertainment.",
        backToTop: "Back to top ↑",
      },
      about: {
        hero: {
          eyebrow: "Our story",
          title: 'Built for the love of <span class="grad-text">play</span>.',
          lead: "PS5Consol is a fan-made concept born from late nights, big screens and the feeling that games can take us somewhere else entirely.",
        },
        story: {
          eyebrow: "How it started",
          title: 'From a sketch to a <span class="grad-text">universe</span>.',
          p1: "It began with a single sketch: a console that looked like it belonged in a sci-fi film, paired with a controller that could make you feel the rain. We kept drawing, testing and refining until the idea had a name.",
          p2: "Today PS5Consol is a small design studio of players, illustrators and engineers. We do not just build pages — we build the feeling of pressing start for the first time.",
          stat1: "Years of dreaming",
          stat2: "Worlds explored",
          stat3: "Players in the community",
        },
        values: {
          eyebrow: "Our values",
          title: 'What we <span class="grad-text">believe</span>.',
          v1Title: "Craft first",
          v1Desc: "Every pixel, every transition and every word is deliberate. Details are the difference.",
          v2Title: "Community",
          v2Desc: "The best worlds are shared. We build with players, not just for them.",
          v3Title: "No limits",
          v3Desc: "If it feels impossible, it is probably the right direction. We keep pushing.",
        },
        timeline: {
          eyebrow: "The journey",
          title: 'A few <span class="grad-text">milestones</span>.',
          y1Title: "The idea",
          y1Desc: "A late-night sketch of a console that feels like the future.",
          y2Title: "First concept",
          y2Desc: "The first full render, the first controller and the first fans.",
          y3Title: "Community",
          y3Desc: "A small Discord became a global crew of players and makers.",
          y4Title: "Store launch",
          y4Desc: "The concept became a place to gear up and play.",
        },
        cta: {
          title: 'Ready to <span class="grad-text">gear up</span>?',
          lead: "Explore the collection and bring the next generation home.",
          button: "Visit the store",
        },
      },
      blog: {
        hero: {
          eyebrow: "The journal",
          title: 'Notes from the <span class="grad-text">other side</span>.',
          lead: "Essays, guides and love letters to games — written by the people who build PS5Consol.",
        },
        featured: "Featured",
        all: "All articles",
        read: "Read article",
        minRead: "min read",
        empty: "No articles yet.",
      },
      article: {
        back: "Back to the journal",
        notFound: "Article not found.",
        more: "Keep reading",
        published: "Published",
      },
      store: {
        hero: {
          eyebrow: "The shop",
          title: 'Gear up. <span class="grad-text">Play more</span>.',
          lead: "Consoles, controllers and accessories designed for the next generation of play.",
        },
        filters: { all: "All", consoles: "Consoles", accessories: "Accessories" },
        add: "Add to cart",
        added: "Added to cart.",
        remove: "Remove",
        cart: {
          title: "Your cart",
          empty: "Your cart is empty.",
          subtotal: "Subtotal",
          checkout: "Checkout",
          note: "Demo store — no real payments are processed.",
          close: "Close cart",
          decrease: "Decrease quantity",
          increase: "Increase quantity",
          checkoutToast: "This is a demo store — checkout is disabled.",
        },
        products: {
          digitalName: "PS5Consol Digital Edition",
          digitalDesc: "All-digital, 825 GB SSD, 4K/120 gaming.",
          digitalBadge: "New",
          discName: "PS5Consol Disc Edition",
          discDesc: "Includes a 4K Blu-ray drive for physical games.",
          discBadge: "Best seller",
          controllerName: "DualSense Wireless Controller",
          controllerDesc: "Adaptive triggers, haptics and a built-in mic.",
          controllerBadge: "Haptic",
          headsetName: "Pulse 3D Wireless Headset",
          headsetDesc: "Tempest 3D audio with a sleek over-ear design.",
          headsetBadge: "3D Audio",
          dockName: "DualSense Charging Station",
          dockDesc: "Charge two controllers at once, neatly.",
          dockBadge: "Accessory",
        },
      },
      login: {
        hero: {
          eyebrow: "Welcome back",
          title: 'Sign in to <span class="grad-text">PS5Consol</span>.',
          lead: "Your worlds, your saves and your squad — one profile, every session.",
        },
        scene: {
          os: "PS5CONSOL OS",
          status: "Ready to play",
          chip1Title: "Ultra-fast SSD",
          chip1Sub: "Instant worlds",
          chip2Title: "Tempest 3D",
          chip2Sub: "Audio engine",
        },
        player: "Player One",
        playerSub: "Local profile",
        online: "Online",
        form: {
          email: "Email",
          emailPlaceholder: "you@example.com",
          password: "Password",
          passwordPlaceholder: "Enter your password",
          showPassword: "Show password",
          hidePassword: "Hide password",
          remember: "Remember me",
          forgot: "Forgot password?",
          submit: "Sign in",
          submitting: "Signing in…",
          invalidEmail: "Enter a valid email address.",
          shortPassword: "Your password needs at least 6 characters.",
        },
        divider: "or",
        guest: "Continue as guest",
        create: "New to PS5Consol?",
        createLink: "Join the list",
        security: "Demo sign-in — no real credentials are stored.",
        demo: {
          forgot: "Demo only — password reset is disabled.",
          success: "Welcome back, Player One. 🎮",
          eyebrow: "Session ready",
          title: "You're in.",
          as: "Signed in as",
          lead: "This is a concept login — no account was created.",
          store: "Enter the store",
          signout: "Sign out",
        },
      },
    },

    fr: {
      meta: {
        home: {
          title: "PS5Consol — Jouez sans limites",
          description: "PS5Consol est une vitrine concept de la nouvelle génération du jeu : SSD ultra-rapide, ray tracing, audio 3D et manette DualSense.",
        },
        about: {
          title: "À propos — PS5Consol",
          description: "L'histoire de PS5Consol : un concept de fan né de l'amour du jeu.",
        },
        blog: {
          title: "Journal — PS5Consol",
          description: "Essais, guides et déclarations d'amour aux jeux par l'équipe PS5Consol.",
        },
        store: {
          title: "Boutique — PS5Consol",
          description: "Consoles, manettes et accessoires pour la nouvelle génération du jeu.",
        },
        article: {
          title: "Journal — PS5Consol",
          description: "Lisez les derniers articles du journal PS5Consol.",
        },
        login: {
          title: "Connexion — PS5Consol",
          description: "Connectez-vous à votre profil PS5Consol avec une page de connexion concept en 3D.",
        },
      },
      nav: {
        home: "Accueil",
        console: "Console",
        games: "Jeux",
        about: "À propos",
        blog: "Blog",
        store: "Boutique",
        reserve: "Réserver",
        menu: "Ouvrir le menu",
        close: "Fermer le menu",
        lang: "Langue",
        cart: "Panier",
        login: "Connexion",
      },
      common: {
        readMore: "Lire la suite",
        viewAll: "Tout voir",
        back: "Retour",
        skip: "Aller au contenu",
        email: "Adresse e-mail",
        home: "Accueil",
      },
      home: {
        hero: {
          eyebrow: "La nouvelle génération est là",
          title: 'Jouez <span class="grad-text">au-delà</span><br>des limites.',
          lead: "Chargements éclair, immersion haptique et mondes à couper le souffle. PS5Consol est votre porte vers la nouvelle génération du jeu.",
          cta1: "Découvrir la console",
          cta2: "Voir les jeux",
          stat1: "SSD ultra-rapide",
          stat2: "Jusqu'à 4K / 120Hz",
          stat3: "GPU RDNA 2",
          scroll: "Défiler",
          chip1Title: "Ray tracing",
          chip1Sub: "Reflets en temps réel",
          chip2Title: "Tempest 3D",
          chip2Sub: "Moteur audio",
        },
        marquee: {
          m0: "Graphismes 4K",
          m1: "120 IPS",
          m2: "Ray Tracing",
          m3: "Audio 3D",
          m4: "Retour haptique",
          m5: "SSD ultra-rapide",
        },
        console: {
          eyebrow: "La console",
          title: 'Taillée pour <span class="grad-text">performer</span>.',
          lead: "Une silhouette audacieuse et futuriste qui cache une véritable ingénierie. Chaque courbe est pensée pour l'air, le silence et la vitesse — pour que vous pensiez au jeu, pas à la machine.",
          check1: "Refroidissement silencieux avec un ventilateur de 120 mm",
          check2: "Verticale ou horizontale — adaptée à votre installation",
          check3: "SSD personnalisé ultra-rapide de 825 Go",
          check4: "Lecteur Blu-ray 4K en option",
          mini1: "CPU AMD Zen 2 personnalisé",
          mini2: "GPU RDNA 2 de 10,28 TFLOPs",
          mini3: "16 Go de mémoire GDDR6",
          caption: "Matériel nouvelle génération",
        },
        features: {
          eyebrow: "Conçue autrement",
          title: 'Une puissance <span class="grad-text">palpable</span>.',
          sub: "Quatre piliers qui changent l'apparence, le son et les sensations des jeux — de la première image à la dernière vibration.",
          ssdTitle: "SSD ultra-rapide",
          ssdDesc: "Chargement quasi instantané et mondes sans coupure. Lancez un jeu en quelques secondes, pas en minutes.",
          hapticsTitle: "Retour haptique DualSense",
          hapticsDesc: "Ressentez la tension d'une corde, le craquement du gravier, la pluie sur votre peau.",
          rayTitle: "Ray tracing",
          rayDesc: "Reflets en temps réel et ombres réalistes, rendus image par image.",
          audioTitle: "Audio 3D Tempest",
          audioDesc: "Entendez l'origine de chaque son. Un paysage sonore à 360° conçu pour le casque.",
        },
        immersion: {
          eyebrow: "Immersion",
          title: 'Ressentez chaque <span class="grad-text">instant</span>.',
          lead: "La manette sans fil DualSense va bien au-delà des vibrations. Les gâchettes adaptatives résistent, le retour haptique parle en textures et un micro intégré vous garde dans l'équipe.",
          check1: "Gâchettes adaptatives à résistance dynamique",
          check2: "Retour haptique pour les textures du jeu",
          check3: "Microphone et haut-parleur intégrés",
          check4: "Bouton Create pour partager vos meilleurs clips",
        },
        games: {
          eyebrow: "La bibliothèque",
          title: 'Des mondes où <span class="grad-text">se perdre</span>.',
          g1: "Royaumes nordiques, combats brutaux et une histoire gravée dans le mythe.",
          g2: "Traquez des machines colossales dans une frontière vivante.",
          g3: "Circuits photoréalistes, physique réaliste et rugissement du moteur.",
          g4: "Traversez des failles dimensionnelles avec un arsenal vivant.",
          g5: "Maîtrisez le casting. Chaque coup porte avec poids et retour.",
          t1: "Action · Aventure",
          t2: "Monde ouvert",
          t3: "Course · Simu",
          t4: "Science-fiction · Tir",
          t5: "Combat",
          b1: "Exclusivité PS5",
          b2: "Exclusivité PS5",
          b3: "4K / 120",
          b4: "Exclusivité PS5",
          b5: "Prêt pour l'haptique",
        },
        specs: {
          eyebrow: "Fiche technique",
          title: 'Sous la <span class="grad-text">coque</span>.',
          lead: "Une architecture personnalisée conçue de zéro pour cette génération. Chaque composant a été choisi pour effacer la friction entre vous et le jeu.",
          cta: "Télécharger la fiche technique",
          r1: "Processeur",
          r2: "GPU",
          r3: "Mémoire",
          r4: "Stockage",
          r5: "Débit",
          r6: "Vidéo",
          r7: "Audio",
          r8: "Lecteur",
        },
        cta: {
          eyebrow: "Préparez-vous",
          title: 'Votre prochaine aventure commence <span class="grad-text">maintenant</span>.',
          lead: "Rejoignez la liste et soyez les premiers informés des lancements, des drops et des éditions exclusives.",
          placeholder: "vous@exemple.com",
          button: "Prévenez-moi",
          note: "Pas de spam. Désabonnement à tout moment.",
        },
        toast: {
          invalid: "Veuillez saisir une adresse e-mail valide.",
          success: "Vous êtes sur la liste — à bientôt de l'autre côté. 🎮",
        },
      },
      footer: {
        tagline: "Une vitrine concept du jeu nouvelle génération. Faite avec amour du métier.",
        explore: "Explorer",
        support: "Aide",
        follow: "Suivre",
        reserve: "Réserver",
        newsletter: "Newsletter",
        warranty: "Garantie",
        contact: "Contact",
        disclaimer: "Concept de fan, non affilié à Sony Interactive Entertainment.",
        backToTop: "Haut de page ↑",
      },
      about: {
        hero: {
          eyebrow: "Notre histoire",
          title: "Née de l'amour du <span class=\"grad-text\">jeu</span>.",
          lead: "PS5Consol est un concept de fan né de nuits blanches, de grands écrans et de la conviction que les jeux peuvent nous emmener ailleurs.",
        },
        story: {
          eyebrow: "Les débuts",
          title: "D'un croquis à un <span class=\"grad-text\">univers</span>.",
          p1: "Tout a commencé par un croquis : une console digne d'un film de science-fiction, accompagnée d'une manette capable de faire ressentir la pluie. Nous avons dessiné, testé et affiné jusqu'à ce que l'idée ait un nom.",
          p2: "Aujourd'hui, PS5Consol est un petit studio de joueurs, d'illustrateurs et d'ingénieurs. Nous ne construisons pas seulement des pages — nous construisons la sensation d'appuyer sur start pour la première fois.",
          stat1: "Années de rêve",
          stat2: "Mondes explorés",
          stat3: "Joueurs dans la communauté",
        },
        values: {
          eyebrow: "Nos valeurs",
          title: 'Ce que nous <span class="grad-text">croyons</span>.',
          v1Title: "L'artisanat d'abord",
          v1Desc: "Chaque pixel, chaque transition et chaque mot sont réfléchis. Le détail fait la différence.",
          v2Title: "Communauté",
          v2Desc: "Les meilleurs mondes se partagent. Nous construisons avec les joueurs, pas seulement pour eux.",
          v3Title: "Sans limites",
          v3Desc: "Si cela semble impossible, c'est probablement la bonne direction. Nous continuons d'avancer.",
        },
        timeline: {
          eyebrow: "Le parcours",
          title: 'Quelques <span class="grad-text">étapes</span>.',
          y1Title: "L'idée",
          y1Desc: "Un croquis tard dans la nuit : une console qui ressemble au futur.",
          y2Title: "Premier concept",
          y2Desc: "Le premier rendu complet, la première manette et les premiers fans.",
          y3Title: "Communauté",
          y3Desc: "Un petit Discord est devenu une équipe mondiale de joueurs et de créateurs.",
          y4Title: "Lancement de la boutique",
          y4Desc: "Le concept est devenu un lieu pour s'équiper et jouer.",
        },
        cta: {
          title: 'Prêt à <span class="grad-text">vous équiper</span> ?',
          lead: "Explorez la collection et ramenez la nouvelle génération chez vous.",
          button: "Visiter la boutique",
        },
      },
      blog: {
        hero: {
          eyebrow: "Le journal",
          title: "Notes de l'<span class=\"grad-text\">autre côté</span>.",
          lead: "Essais, guides et déclarations d'amour aux jeux — écrits par celles et ceux qui construisent PS5Consol.",
        },
        featured: "À la une",
        all: "Tous les articles",
        read: "Lire l'article",
        minRead: "min de lecture",
        empty: "Aucun article pour le moment.",
      },
      article: {
        back: "Retour au journal",
        notFound: "Article introuvable.",
        more: "Poursuivre la lecture",
        published: "Publié le",
      },
      store: {
        hero: {
          eyebrow: "La boutique",
          title: 'Équipez-vous. <span class="grad-text">Jouez plus</span>.',
          lead: "Consoles, manettes et accessoires pensés pour la nouvelle génération du jeu.",
        },
        filters: { all: "Tout", consoles: "Consoles", accessories: "Accessoires" },
        add: "Ajouter au panier",
        added: "Ajouté au panier.",
        remove: "Retirer",
        cart: {
          title: "Votre panier",
          empty: "Votre panier est vide.",
          subtotal: "Sous-total",
          checkout: "Payer",
          note: "Boutique démo — aucun paiement réel n'est traité.",
          close: "Fermer le panier",
          decrease: "Diminuer la quantité",
          increase: "Augmenter la quantité",
          checkoutToast: "Ceci est une boutique démo — le paiement est désactivé.",
        },
        products: {
          digitalName: "PS5Consol Édition Numérique",
          digitalDesc: "100 % numérique, SSD 825 Go, jeu 4K/120.",
          digitalBadge: "Nouveau",
          discName: "PS5Consol Édition Disque",
          discDesc: "Avec lecteur Blu-ray 4K pour les jeux physiques.",
          discBadge: "Meilleure vente",
          controllerName: "Manette sans fil DualSense",
          controllerDesc: "Gâchettes adaptatives, haptique et micro intégré.",
          controllerBadge: "Haptique",
          headsetName: "Casque sans fil Pulse 3D",
          headsetDesc: "Audio 3D Tempest avec un design circum-aural élégant.",
          headsetBadge: "Audio 3D",
          dockName: "Station de charge DualSense",
          dockDesc: "Chargez deux manettes à la fois, proprement.",
          dockBadge: "Accessoire",
        },
      },
      login: {
        hero: {
          eyebrow: "Bon retour",
          title: 'Connexion à <span class="grad-text">PS5Consol</span>.',
          lead: "Vos mondes, vos sauvegardes et votre équipe — un profil, à chaque session.",
        },
        scene: {
          os: "PS5CONSOL OS",
          status: "Prêt à jouer",
          chip1Title: "SSD ultra-rapide",
          chip1Sub: "Mondes instantanés",
          chip2Title: "Tempest 3D",
          chip2Sub: "Moteur audio",
        },
        player: "Joueur Un",
        playerSub: "Profil local",
        online: "En ligne",
        form: {
          email: "E-mail",
          emailPlaceholder: "vous@exemple.com",
          password: "Mot de passe",
          passwordPlaceholder: "Saisissez votre mot de passe",
          showPassword: "Afficher le mot de passe",
          hidePassword: "Masquer le mot de passe",
          remember: "Se souvenir de moi",
          forgot: "Mot de passe oublié ?",
          submit: "Se connecter",
          submitting: "Connexion…",
          invalidEmail: "Saisissez une adresse e-mail valide.",
          shortPassword: "Votre mot de passe doit contenir au moins 6 caractères.",
        },
        divider: "ou",
        guest: "Continuer en invité",
        create: "Nouveau sur PS5Consol ?",
        createLink: "Rejoindre la liste",
        security: "Connexion démo — aucun identifiant réel n'est stocké.",
        demo: {
          forgot: "Démo uniquement — la réinitialisation est désactivée.",
          success: "Bon retour, Joueur Un. 🎮",
          eyebrow: "Session prête",
          title: "Vous êtes connecté.",
          as: "Connecté en tant que",
          lead: "Ceci est une connexion concept — aucun compte n'a été créé.",
          store: "Entrer dans la boutique",
          signout: "Se déconnecter",
        },
      },
    },

    ar: {
      meta: {
        home: {
          title: "PS5Consol — العب بلا حدود",
          description: "PS5Consol هو عرض تصوري للجيل القادم من اللعب: قرص SSD فائق السرعة، تتبع الأشعة، صوت ثلاثي الأبعاد، ويد تحكم DualSense.",
        },
        about: {
          title: "من نحن — PS5Consol",
          description: "قصة PS5Consol: مفهوم من صنع المعجبين، وُلد من حب اللعب.",
        },
        blog: {
          title: "المجلة — PS5Consol",
          description: "مقالات وأدلة ورسائل حب للألعاب من فريق PS5Consol.",
        },
        store: {
          title: "المتجر — PS5Consol",
          description: "أجهزة وأيادي تحكم وملحقات للجيل القادم من اللعب.",
        },
        article: {
          title: "المجلة — PS5Consol",
          description: "اقرأ أحدث مقالات مجلة PS5Consol.",
        },
        login: {
          title: "تسجيل الدخول — PS5Consol",
          description: "سجّل الدخول إلى ملفك الشخصي في PS5Consol عبر صفحة دخول تصورية بتصميم ثلاثي الأبعاد.",
        },
      },
      nav: {
        home: "الرئيسية",
        console: "الجهاز",
        games: "الألعاب",
        about: "من نحن",
        blog: "المجلة",
        store: "المتجر",
        reserve: "احجز نسختك",
        menu: "افتح القائمة",
        close: "أغلق القائمة",
        lang: "اللغة",
        cart: "السلة",
        login: "تسجيل الدخول",
      },
      common: {
        readMore: "اقرأ المزيد",
        viewAll: "عرض الكل",
        back: "رجوع",
        skip: "انتقل إلى المحتوى",
        email: "البريد الإلكتروني",
        home: "الرئيسية",
      },
      home: {
        hero: {
          eyebrow: "الجيل القادم هنا",
          title: 'العب <span class="grad-text">بلا</span><br>حدود.',
          lead: "تحميل فوري، إحساس لمسي غامر، وعوالم تخطف الأنفاس. PS5Consol هي بوابتك إلى الجيل القادم من اللعب.",
          cta1: "اكتشف الجهاز",
          cta2: "شاهد الألعاب",
          stat1: "قرص SSD فائق السرعة",
          stat2: "حتى 4K / 120 هرتز",
          stat3: "معالج RDNA 2",
          scroll: "مرّر",
          chip1Title: "تتبع الأشعة",
          chip1Sub: "انعكاسات فورية",
          chip2Title: "Tempest 3D",
          chip2Sub: "محرك صوتي",
        },
        marquee: {
          m0: "رسومات 4K",
          m1: "120 إطاراً",
          m2: "تتبع الأشعة",
          m3: "صوت ثلاثي الأبعاد",
          m4: "استجابة لمسية",
          m5: "SSD فائق السرعة",
        },
        console: {
          eyebrow: "الجهاز",
          title: 'مصمّم <span class="grad-text">للأداء</span>.',
          lead: "تصميم جريء ومستقبلي يخفي هندسة متقدمة. كل انحناءة صُممت من أجل تدفق الهواء والهدوء والسرعة — لتركز على اللعبة، لا على الجهاز.",
          check1: "تبريد صامت مع مروحة ضخمة 120 مم",
          check2: "عمودي أو أفقي — يناسب إعدادك",
          check3: "قرص SSD مخصص فائق السرعة بسعة 825 جيجابايت",
          check4: "محرّك أقراص Blu-ray 4K اختياري",
          mini1: "معالج AMD Zen 2 مخصص",
          mini2: "معالج رسومات RDNA 2 بقوة 10.28 تيرافلوب",
          mini3: "ذاكرة GDDR6 بسعة 16 جيجابايت",
          caption: "عتاد الجيل القادم",
        },
        features: {
          eyebrow: "مصمّم بشكل مختلف",
          title: 'قوة <span class="grad-text">تشعر بها</span>.',
          sub: "أربع ركائز تغيّر شكل الألعاب وصوتها وإحساسها — من أول إطار إلى آخر نبضة لمسية.",
          ssdTitle: "قرص SSD فائق السرعة",
          ssdDesc: "تحميل شبه فوري وعوالم بلا انقطاع. ابدأ اللعب في ثوانٍ، لا دقائق.",
          hapticsTitle: "استجابة DualSense اللمسية",
          hapticsDesc: "اشعر بشدّ وتر القوس، وطحن الحصى، والمطر على بشرتك.",
          rayTitle: "تتبع الأشعة",
          rayDesc: "انعكاسات فورية وظلال واقعية، تُرسم إطاراً بإطار.",
          audioTitle: "صوت Tempest ثلاثي الأبعاد",
          audioDesc: "اسمع مصدر كل صوت. مشهد صوتي كامل بزاوية 360° مصمم لسماعات الرأس.",
        },
        immersion: {
          eyebrow: "الانغماس",
          title: 'اشعر بكل <span class="grad-text">لحظة</span>.',
          lead: "يد التحكم DualSense اللاسلكية تتجاوز الاهتزاز بكثير. الزنادات التكيفية تقاوم، والاستجابة اللمسية تحكي بالملمس، وميكروفون مدمج يبقيك مع فريقك.",
          check1: "زنادات تكيفية بمقاومة ديناميكية",
          check2: "استجابة لمسية لأنسجة اللعبة",
          check3: "ميكروفون ومكبر صوت مدمجان",
          check4: "زر Create لمشاركة أفضل مقاطعك",
        },
        games: {
          eyebrow: "المكتبة",
          title: 'عوالم تستحق <span class="grad-text">أن تضيع</span> فيها.',
          g1: "عوالم إسكندنافية، قتال وحشي، وقصة محفورة في الأسطورة.",
          g2: "اصطد آلات عملاقة عبر حدود حيّة تنبض بالحياة.",
          g3: "حلبات واقعية، فيزياء حقيقية، وهدير المحرك.",
          g4: "اخترق شقوق الأبعاد بترسانة حيّة.",
          g5: "أتقن المقاتلين. كل ضربة لها وزن واستجابة.",
          t1: "أكشن · مغامرة",
          t2: "عالم مفتوح",
          t3: "سباق · محاكاة",
          t4: "خيال علمي · تصويب",
          t5: "قتال",
          b1: "حصري على PS5",
          b2: "حصري على PS5",
          b3: "4K / 120",
          b4: "حصري على PS5",
          b5: "جاهز للاهتزاز",
        },
        specs: {
          eyebrow: "المواصفات التقنية",
          title: 'تحت <span class="grad-text">الغلاف</span>.',
          lead: "هندسة مخصصة بُنيت من الصفر لهذا الجيل. اختير كل مكوّن لإزالة أي عائق بينك وبين اللعبة.",
          cta: "حمّل ورقة المواصفات الكاملة",
          r1: "المعالج",
          r2: "معالج الرسومات",
          r3: "الذاكرة",
          r4: "التخزين",
          r5: "معدل النقل",
          r6: "الفيديو",
          r7: "الصوت",
          r8: "محرّك الأقراص",
        },
        cta: {
          eyebrow: "استعد",
          title: 'مغامرتك القادمة تبدأ <span class="grad-text">الآن</span>.',
          lead: "انضم إلى القائمة وكن أول من يعرف عن الإصدارات والعروض والحزم الحصرية.",
          placeholder: "you@example.com",
          button: "أبلغني",
          note: "لا رسائل مزعجة. يمكنك إلغاء الاشتراك في أي وقت.",
        },
        toast: {
          invalid: "يرجى إدخال بريد إلكتروني صالح.",
          success: "أنت على القائمة — نراك على الجانب الآخر. 🎮",
        },
      },
      footer: {
        tagline: "عرض تصوري للجيل القادم من اللعب. صُنع بحب للحرفة.",
        explore: "استكشف",
        support: "الدعم",
        follow: "تابعنا",
        reserve: "الحجز",
        newsletter: "النشرة",
        warranty: "الضمان",
        contact: "اتصل بنا",
        disclaimer: "مفهوم من صنع المعجبين، غير تابع لشركة Sony Interactive Entertainment.",
        backToTop: "العودة للأعلى ↑",
      },
      about: {
        hero: {
          eyebrow: "قصتنا",
          title: 'صُنعنا من حب <span class="grad-text">اللعب</span>.',
          lead: "PS5Consol مفهوم من صنع المعجبين، وُلد من الليالي الطويلة والشاشات الكبيرة والإحساس بأن الألعاب يمكن أن تأخذنا إلى مكان آخر تماماً.",
        },
        story: {
          eyebrow: "كيف بدأنا",
          title: 'من رسمة إلى <span class="grad-text">عالم</span>.',
          p1: "بدأ كل شيء برسمة واحدة: جهاز يشبه أن يكون من فيلم خيال علمي، مع يد تحكم قادرة على جعلك تشعر بالمطر. واصلنا الرسم والاختبار والتحسين حتى أصبح للفكرة اسم.",
          p2: "اليوم PS5Consol استوديو صغير من اللاعبين والرسامين والمهندسين. نحن لا نبني صفحات فقط — بل نبني إحساس الضغط على زر البدء للمرة الأولى.",
          stat1: "سنوات من الحلم",
          stat2: "عوالم مستكشفة",
          stat3: "لاعب في المجتمع",
        },
        values: {
          eyebrow: "قيمنا",
          title: 'ما <span class="grad-text">نؤمن</span> به.',
          v1Title: "الحِرفية أولاً",
          v1Desc: "كل بكسل وكل انتقال وكل كلمة مقصودة. التفاصيل هي الفرق.",
          v2Title: "المجتمع",
          v2Desc: "أفضل العوالم تُشارك. نبني مع اللاعبين، لا من أجلهم فقط.",
          v3Title: "بلا حدود",
          v3Desc: "إذا بدا الأمر مستحيلاً، فغالباً هو الاتجاه الصحيح. نواصل التقدم.",
        },
        timeline: {
          eyebrow: "الرحلة",
          title: 'بعض <span class="grad-text">المحطات</span>.',
          y1Title: "الفكرة",
          y1Desc: "رسمة في ساعة متأخرة لجهاز يشبه المستقبل.",
          y2Title: "أول مفهوم",
          y2Desc: "أول تصميم كامل، أول يد تحكم، وأول المعجبين.",
          y3Title: "المجتمع",
          y3Desc: "سيرفر Discord صغير أصبح فريقاً عالمياً من اللاعبين والمبدعين.",
          y4Title: "إطلاق المتجر",
          y4Desc: "تحوّل المفهوم إلى مكان لتجهيز عدّتك واللعب.",
        },
        cta: {
          title: 'جاهز <span class="grad-text">لتجهيز</span> عدّتك؟',
          lead: "استكشف المجموعة واجلب الجيل القادم إلى منزلك.",
          button: "زر المتجر",
        },
      },
      blog: {
        hero: {
          eyebrow: "المجلة",
          title: 'ملاحظات من <span class="grad-text">الضفة الأخرى</span>.',
          lead: "مقالات وأدلة ورسائل حب للألعاب — بقلم من يبنون PS5Consol.",
        },
        featured: "مميز",
        all: "كل المقالات",
        read: "اقرأ المقال",
        minRead: "دقائق قراءة",
        empty: "لا توجد مقالات بعد.",
      },
      article: {
        back: "العودة إلى المجلة",
        notFound: "المقال غير موجود.",
        more: "واصل القراءة",
        published: "نُشر في",
      },
      store: {
        hero: {
          eyebrow: "المتجر",
          title: 'جهّز عدّتك. <span class="grad-text">العب أكثر</span>.',
          lead: "أجهزة وأيادي تحكم وملحقات مصممة للجيل القادم من اللعب.",
        },
        filters: { all: "الكل", consoles: "أجهزة", accessories: "ملحقات" },
        add: "أضف إلى السلة",
        added: "أُضيف إلى السلة.",
        remove: "إزالة",
        cart: {
          title: "سلتك",
          empty: "سلتك فارغة.",
          subtotal: "المجموع الفرعي",
          checkout: "إتمام الشراء",
          note: "متجر تجريبي — لا تتم أي مدفوعات حقيقية.",
          close: "إغلاق السلة",
          decrease: "إنقاص الكمية",
          increase: "زيادة الكمية",
          checkoutToast: "هذا متجر تجريبي — الدفع معطّل.",
        },
        products: {
          digitalName: "PS5Consol النسخة الرقمية",
          digitalDesc: "رقمية بالكامل، SSD بسعة 825GB، لعب 4K/120.",
          digitalBadge: "جديد",
          discName: "PS5Consol نسخة الأقراص",
          discDesc: "تتضمن محرّك Blu-ray 4K للألعاب المادية.",
          discBadge: "الأكثر مبيعاً",
          controllerName: "يد تحكم DualSense اللاسلكية",
          controllerDesc: "زنادات تكيفية، استجابة لمسية، وميكروفون مدمج.",
          controllerBadge: "لمسي",
          headsetName: "سماعة Pulse 3D اللاسلكية",
          headsetDesc: "صوت Tempest ثلاثي الأبعاد بتصميم مريح حول الأذن.",
          headsetBadge: "صوت 3D",
          dockName: "قاعدة شحن DualSense",
          dockDesc: "اشحن يدتي تحكم في آنٍ واحد بأناقة.",
          dockBadge: "ملحق",
        },
      },
      login: {
        hero: {
          eyebrow: "مرحبًا بعودتك",
          title: 'سجّل الدخول إلى <span class="grad-text">PS5Consol</span>.',
          lead: "عوالمك وحفظك وفريقك — ملف واحد لكل جلسة.",
        },
        scene: {
          os: "PS5CONSOL OS",
          status: "جاهز للعب",
          chip1Title: "SSD فائق السرعة",
          chip1Sub: "عوالم فورية",
          chip2Title: "Tempest 3D",
          chip2Sub: "محرّك الصوت",
        },
        player: "اللاعب الأول",
        playerSub: "ملف محلي",
        online: "متصل",
        form: {
          email: "البريد الإلكتروني",
          emailPlaceholder: "you@example.com",
          password: "كلمة المرور",
          passwordPlaceholder: "أدخل كلمة المرور",
          showPassword: "إظهار كلمة المرور",
          hidePassword: "إخفاء كلمة المرور",
          remember: "تذكّرني",
          forgot: "هل نسيت كلمة المرور؟",
          submit: "تسجيل الدخول",
          submitting: "جارٍ الدخول…",
          invalidEmail: "أدخل بريدًا إلكترونيًا صحيحًا.",
          shortPassword: "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.",
        },
        divider: "أو",
        guest: "المتابعة كضيف",
        create: "جديد على PS5Consol؟",
        createLink: "انضم إلى القائمة",
        security: "دخول تجريبي — لا يتم تخزين أي بيانات اعتماد حقيقية.",
        demo: {
          forgot: "تجريبي فقط — إعادة تعيين كلمة المرور معطّلة.",
          success: "مرحبًا بعودتك، اللاعب الأول. 🎮",
          eyebrow: "الجلسة جاهزة",
          title: "لقد دخلت.",
          as: "مسجّل الدخول باسم",
          lead: "هذا دخول تصوري — لم يتم إنشاء أي حساب.",
          store: "ادخل إلى المتجر",
          signout: "تسجيل الخروج",
        },
      },
    },
  };

  const STORAGE_KEY = "ps5consol-lang";
  const supported = ["en", "fr", "ar"];

  const detectLang = () => {
    try {
      const fromUrl = new URLSearchParams(window.location.search).get("lang");
      if (supported.includes(fromUrl)) return fromUrl;
    } catch (e) {
      /* URL unavailable */
    }
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (supported.includes(stored)) return stored;
    } catch (e) {
      /* storage unavailable */
    }
    const browser = (navigator.language || "en").slice(0, 2).toLowerCase();
    return supported.includes(browser) ? browser : "en";
  };

  let lang = detectLang();

  const resolve = (obj, path) =>
    path.split(".").reduce((acc, key) => (acc && Object.prototype.hasOwnProperty.call(acc, key) ? acc[key] : undefined), obj);

  const t = (key) => {
    const value = resolve(DICT[lang], key);
    if (value !== undefined) return value;
    const fallback = resolve(DICT.en, key);
    return fallback !== undefined ? fallback : key;
  };

  const apply = () => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
      el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria")));
    });

    const page = document.body?.dataset.page;
    if (page) {
      document.title = t(`meta.${page}.title`);
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", t(`meta.${page}.description`));
    }

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    document.dispatchEvent(new CustomEvent("i18n:changed", { detail: { lang } }));
  };

  const setLang = (code) => {
    if (!supported.includes(code) || code === lang) return;
    lang = code;
    try {
      window.localStorage.setItem(STORAGE_KEY, code);
    } catch (e) {
      /* storage unavailable */
    }
    apply();
  };

  window.I18N = {
    t,
    setLang,
    apply,
    get lang() {
      return lang;
    },
    supported,
  };

  const init = () => {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.dataset.lang));
    });
    apply();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
