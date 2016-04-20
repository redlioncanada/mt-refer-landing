
import {Injectable} from 'angular2/core';
import {LoggerService} from './logger.service'

@Injectable()
export class AppDataService {
	private contents;
	public language: string;
	private init: boolean

	constructor(private logger: LoggerService) {
		this.language = this.getLanguage()
		this.contents = {}
		this.contents.en = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead-1.jpg",
				imageForeground: "./public/images/refer-landing-masthead-2.jpg",
				alt: "test",
				title: "Refrigerators"
			},
			banner: {
				enabled: true,
				link: 'http://www.whirlpool.ca/en_CA/everydaycare/',
				image: './public/images/banner.jpg',
				ctaText: 'Learn More',
				ctaBackground: './public/images/button-background.png',
				analytics: {
					category: "@category",
					action: "Clicked Bottom Banner",
					label: "Every Day Care-Learn More"
				}
			},
			features: {
				enabled: true,
				features: [
					{
						image: "./public/images/refer-landing-shopping-cart.png",
						title: "Buying Guide",
						alt: "test",
						desc: "What to look for when buying",
						ctaText: "Click Here",
						ctaBackground: "./public/images/button-background.png",
						link: "https://www.google.ca/#q=placeholder",
						type: "cart",
						analytics: {
							category: "@category",
							action: "Clicked Refer Resources",
							label: "Buying Guide"
						}
					},
					{
						image: "./public/images/refer-landing-star.png",
						title: "Ratings and Reviews",
						alt: "test",
						desc: "See what others are saying",
						ctaText: "Click Here",
						ctaBackground: "./public/images/button-background.png",
						link: "http://www.maytag.ca/en_CA/2_3_90/jump-page_best-products.content.html",
						type: "star",
						analytics: {
							category: "@category",
							action: "Clicked Refer Resources",
							label: "Ratings and Reviews"
						}
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Find Your Maytag",
						alt: "test",
						desc: "Need help finding your refrigerator?",
						ctaText: "Click Here",
						ctaBackground: "./public/images/button-background.png",
						link: "http://findmy.maytag.ca",
						type: "magnifier",
						analytics: {
							category: "@category",
							action: "Clicked Refer Resources",
							label: "Find Your MT"
						}
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Get More From Your Refrigerator",
				features: [
					{
						title: "Additional Accessories",
						image: "./public/images/more-features-1.jpg",
						link: "http://www.maytag.ca/en_CA/Accessories-1/Accessories_Kitchen_Refrigerator-3/102290104/",
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "Water Filtration",
						image: "./public/images/more-features-2.jpg",
						link: "http://www.maytag.ca/en_CA/2_3_80/jump-page_water-filters.content.html",
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "Certified Care",
						image: "./public/images/more-features-3.jpg",
						link: "http://www.maytag.ca/en_CA/2_3_1/jump-page_extended-service-plans.content.html",
						alt: "test",
						text: "",
						cta: ""
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Built Better",
				videos: [
					{
						id: 'u8rBThh8bPo',
						thumb: './public/images/video-select-1.jpg',
						title: 'Temperature Drawer',
						alt: "test",
						ctaTitle: 'Temperature Drawer',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "Maytag's Adjustable Temperature Refrigerated Drawer let's you select a precise setting and allows plenty of space for when you really want to stock up and it's full extension construction puts everything in the drawer within easy reach. It's a new storage option that gives you a flexible spot for meats and cheeses, fruits and vegetables, drinks - whatever you want! You decide, then select the setting to match. At last, a refrigerator that adjusts to your needs.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Temperature Drawer"
						}
					},
					{
						id: 'Fm_-PxETMUA',
						thumb: './public/images/video-select-2.jpg',
						title: 'Four-door',
						alt: "test",
						ctaTitle: 'Four-door',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "Providing your family with fresh, healthy food is one of your strengths and Maytag's too. That's why Maytag's 4-door refrigerator sets a bold new standard for refrigeration. With advanced features and unmatched durability to keep your food chilled properly - from the first grape to the last - and when it comes to cooling, this powerful Maytag® Refrigerator is made to hold the cold. It's Dual Cool Evaporators have an evaporator dedicated to each compartment which generate ideal humidity levels in both the freezer and the refrigerator so all your food stays at it's best. And, with Maytag's 10 year limited parts warranty on the compressor, you can count on it to hold the cold for years. Maytag's patented door seal design helps lock in cold air but if things get heated, your coolness won't be compromised. Power Cold™ quickly chills down the refrigerator with the touch of a button to keep everything fresh and tasty. Just like you, the Maytag® Refrigerator keeps things running smoothly with smooth sliding premium glides and rollers. Maytag® Steel Shelves are cold to the touch and ruggedly reliable with under-shelf LED lighting that gives you light everywhere you need it. Maytag's Store-N-Door ice dispensing system and sturdy gallon door bins help to utilize every inch of your refrigerator.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "Four-door"
						}
					},
					{
						id: 'OSgIUSI1ZkE',
						thumb: './public/images/video-select-3.jpg',
						title: '10-Year Warranty',
						alt: "test",
						ctaTitle: '10-Year Warranty',
						ctaText: 'Watch Video',
						ctaBackground: "./public/images/button-background.png",
						desc: "At Maytag, we don't just tell you our refrigerators are made for the long haul, we're so confident in our product that we've added a 10 year limited parts warranty on select parts to back them up. Our warranty on the compressor covers the heart of the refrigerator, so you know you can count on it to hold the cold for years.",
						analytics: {
							category: "@category",
							action: "Clicked Built Better",
							label: "10-Year Warranty"
						}
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choose Your Configuration',
				nav: {
					text: 'See<br/>All',
					link: 'http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back',
					analytics: {
						category: "@category",
						action: "Clicked Choose Your Refer Configuration",
						label: "See all Refer"
					}
				},
				products: [
					{
						image: "./public/images/products/four-door.png",
                        title: "Four-door",
                        alt: "test",
                        desc: "There’s getting organized, and then there’s getting organized your way. Thanks to the adjustable-temperature refrigerated drawer and EasySlide bin, you can store everything you need exactly the way you want to. Plus, the 4-door fridge’s premium design will keep it looking great on the outside, too.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators_French_Door-3/102290031+4294966906+112290217/​",
                        id: "four-door",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Refer Configuration",
							label: "Four-door",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/french-door.png",
                        title: "French Door",
                        alt: "test",
                        desc: "More capacity. More ways to stay organized. French Door fridges are made with convenience in mind. That means keeping your fresh foods at eye level and easily storing your frozen favourites. Plus, it’s built to look great in any kitchen.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators_French_Door-3/102290031+4294966906/",
                        id: "french-door",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Refer Configuration",
							label: "French Door",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/side-by-side.png",
                        title: "Side-by-Side",
                        alt: "test",
                        desc: "Classic style? Check. Fits your space? You bet. More door bin space means you can easily store and access food items. Plus it’s built to store more of whatever you need, whether that’s fresh or frozen foods. And yes, a range of different sizes are available.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators_SidebySide-3/102290031+4294967038/",
                        id: "side-by-side",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Refer Configuration",
							label: "Side-by-side",
							learnMore: 'Learn More'
						}
                    },
					{
						image: "./public/images/products/bottom-freezer.png",
                        title: "Bottom-Freezer",
                        alt: "test",
                        desc: "Getting to your fresh food items doesn’t get easier than this. You can count on bottom-freezer refrigerators to keep everything you need at eye-level, so you won’t have to go searching when you’re in a hurry. How’s that for convenience?",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators_Bottom_Freezer-3/102290031+4294967048/",
                        id: "bottom-freezer",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Refer Configuration",
							label: "Bottom-Freezer",
							learnMore: 'Learn More'
						}
                    },
                    {
						image: "./public/images/products/top-freezer.png",
                        title: "Top-Freezer",
                        alt: "test",
                        desc: "Quality, meet value. With a top-freezer refrigerator, there’s always a place to store fresh and frozen foods. Plus, they’re available in smaller sizes, so you can use a second one when you need the extra space. You’re right, that is a good idea.",
                        link: "http://www.maytag.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators_Top_Freezer-3/102290031+4294967059/",
                        id: "top-freezer",
                        ctaText: "Learn More",
                        ctaBackground: "./public/images/button-background.png",
                        analytics: {
							category: "@category",
							action: "Clicked Choose Your Refer Configuration",
							label: "Top-Freezer",
							learnMore: 'Learn More'
						}
                    }
				]
			}
		}

		this.contents.fr = {
			masthead: {
				enabled: true,
				image: "./public/images/refer-landing-masthead-fr.jpg",
				imageForeground: "./public/images/refer-landing-masthead-fr.jpg",
				alt: "test",
				title: ""
			},
			banner: {
				enabled: true,
				link: 'http://www.whirlpool.ca/fr_CA/everydaycare/',
				image: './public/images/banner_fr.jpg',
				ctaText: 'En savoir plus'
			},
			features: {
				enabled: true,
				features: [
					// {
					// 	image: "./public/images/refer-landing-shopping-cart.png",
					// 	title: "Guide D'achat",
					// 	desc: "Éléments à considérer lorsque vous magasinez",
					// 	alt: "test",
					// 	cta: "Cliquez ici",
					// 	link: "http://whirlpool.ca/fr_CA/",
					// 	type: "cart"
					// },
					{
						image: "./public/images/refer-landing-star.png",
						title: "Classements et Évaluations",
						desc: "Voyez ce que les autres clients en disent",
						alt: "test",
						cta: "Cliquez ici",
						link: "http://www.whirlpool.ca/fr_CA/2_3_90/jump-pages_best-products.content.html",
						type: "star"
					},
					{
						image: "./public/images/refer-landing-mag-glass.png",
						title: "Trouvez Votre Électroménager Whirlpool",
						desc: "Vous avez besoin d'aide pour trouver un réfrigérateur?",
						alt: "test",
						cta: "Cliquez ici",
						link: "http://trouvermon.whirlpool.ca",
						type: "magnifier"
					}
				]
			},
			morefeatures: {
				enabled: true,
				title: "Fonctions supplémentaires",
				features: [
					{
						title: "Accessoires supplémentaires",
						image: "./public/images/more-features-1.jpg",
						link: "http://www.whirlpool.ca/fr_CA/Accessories-1/Accessories_Kitchen_Accessories_Refrigerator-3/102280119/",
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "Filtres à eau",
						image: "./public/images/more-features-2.jpg",
						link: "http://www.whirlpool.ca/fr_CA/2_3_80/jump-pages_water-filters.content.html",
						alt: "test",
						text: "",
						cta: ""
					},
					{
						title: "Entretien autorisé",
						image: "./public/images/more-features-3.jpg",
						link: "https://whirlpoolcertifiedcare.ca/fr",
						alt: "test",
						text: "",
						cta: ""
					}
				]
			},
			videoplayer: {
				enabled: true,
				title: "Innovation à voir absolument",
				videos: [
					{
						image: './public/images/video-thumb-1.jpg',
						thumb: './public/images/video-select-1.jpg',
						title: 'Système de rangement Perfect Places<sup>&trade;</sup>',
						ctaTitle: 'Système de rangement Perfect Places<sup>&trade;</sup>',
						alt: "test",
						cta: 'Voir',
						desc: 'La conception Whirlpool à double tiroir  offre cinq zones de rangement uniques pour mieux organiser vos articles. Il s\'agit de notre réfrigérateur le plus flexible à ce jour.'
					},
					{
						image: './public/images/video-thumb-2.jpg',
						thumb: './public/images/video-select-2.jpg',
						title: 'Fonctions Resource Saver<sup>&trade;</sup> et EasyView<sup>&trade;</sup>',
						ctaTitle: 'Fonctions Resource Saver<sup>&trade;</sup><br/>et EasyView<sup>&trade;</sup>',
						alt: "test",
						cta: 'Voir',
						desc: 'Les réfrigérateurs les plus efficaces de l’industrie dans leur catégorie respective. Augmentez la souplesse de rangement de votre réfrigérateur et préservez la fraîcheur et le bon goût de vos fruits et légumes grâce au système de bacs à légumes triples EasyView™. Désormais, vous pouvez facilement accéder aux aliments grâce à la visibilité totale à travers le bac à légumes. De plus, vous pourrez ranger une grande variété d\'articles grâce aux trois tiroirs. Le contrôle automatique d\'humidité contribue également à maintenir la fraîcheur.',
					},
					{
						image: './public/images/video-thumb-3.jpg',
						thumb: './public/images/video-select-3.jpg',
						title: 'Système de rangement StoreRight<sup>&trade;</sup>',
						ctaTitle: 'Système de rangement StoreRight<sup>&trade;</sup>',
						alt: "test",
						cta: 'Voir',
						desc: 'Le système de rangement StoreRight™ préserve la fraîcheur des aliments et réduit les brûlures de congélation, grâce à une technologie de refroidissement perfectionnée et ajuste automatiquement les niveaux d\'humidité.'
					}
				]
			},
			productselector: {
				enabled: true,
				title: 'Choisissez votre style',
				nav: {
					text: 'Tout<br/>Voir',
					link: 'http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back'
				},
				products: [
					{
						image: "./public/images/products/double-drawer.png",
                        title: "Tiroir double",
                        desc: "Devenez le champion de l’organisation grâce à notre réfrigérateur polyvalent à double tiroir, conçu pour tous les besoins de votre famille. Son style unique offre 9 espaces de rangement, optimisés par notre système PerfectPlaces™, avec le tiroir à température contrôlée et le bac pour petits articles.",
                        link: "http://www.whirlpool.ca/fr_CA/kitchen-1/refrigeration-2/refrigerators-3/-%5BWRV986FDEM%5D-5552596/WRV986FDEM/",
                        alt: "test",
                        id: "double-drawer",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/french-door.png",
                        title: "Portes françaises",
                        desc: "Nos réfrigérateurs à portes françaises procurent un rangement polyvalent, maintiennent vos produits frais à hauteur des yeux et vous permettent de conserver facilement vos produits congelés favoris. Leur élégance et capacité optimale font de ces réfrigérateurs un élément idéal de votre cuisine familiale.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back",
                        alt: "test",
                        id: "french-door",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/side-by-side.png",
                        title: "Côte à côte",
                        desc: "Découvrez l’avantage d’un espace supplémentaire dans les balconnets de porte qui facilitent le rangement et l'accès aux petits ou grands articles. Ce style classique offre un rangement parfaitement équilibré entre les aliments frais et surgelés, avec la possibilité de choisir différentes tailles.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023+102110368/#back",
                        alt: "test",
                        id: "side-by-side",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/bottom-freezer.png",
                        title: "Congélateur inférieur",
                        desc: "Bénéficiez d’un accès pratique aux aliments frais et aux collations sur le pouce ou après l'école. Vous avez le choix entre le congélateur-tiroir ou à porte, ainsi qu'une variété de tailles s'agençant à tout espace de votre maison.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023/",
                        alt: "test",
                        id: "bottom-freezer",
                        ctaText: "En savoir plus"
                    },
                    {
						image: "./public/images/products/top-freezer.png",
                        title: "Congélateur supérieur",
                        desc: "Il y aura toujours une place pour vos aliments frais ou surgelés favoris dans ce réfrigérateur au style simple et classique à la fois. Notre réfrigérateur à congélateur supérieur offre un excellent rapport qualité/prix et est aussi disponible en tailles plus petites.",
                        link: "http://www.whirlpool.ca/en_CA/Kitchen-1/Kitchen_Refrigeration_Refrigerators-3/102280023/",
                        alt: "test",
                        id: "top-freezer",
                        ctaText: "En savoir plus"
                    },
					{
						image: "./public/images/products/freezer.png",
                        title: "Congélateurs",
                        desc: "Découvrez tout l'espace supplémentaire pour les aliments congelés, tels que les pizzas ou les suçons glacés. Nos modèles horizontaux ou verticaux assurent l'ajustement idéal pour tout espace.",
                        link: "http://www.whirlpool.ca/fr_CA/Kitchen-1/Kitchen_Refrigeration_Freezers-3/102280030/",
                        alt: "test",
                        id: "freezers",
                        ctaText: "En savoir plus"
                    }
				]
			}
		}
	}

	get() {
		if (!(this.language in this.contents)) {
			this.logger.error('Language does not exist')
		}

		return this.contents[this.language];
	}

	applyText(obj) {
		if (!(this.language in this.contents)) {
			this.logger.error('Language does not exist')
		}

		if (obj.name in this.contents[this.language]) {
			for (var i in this.contents[this.language][obj.name]) {
				obj[i] = this.contents[this.language][i]
			}
		}
	}

	getLanguage() {
		var url = window.location.href
		if (url.indexOf('/fr_CA') > -1) return 'fr'
		return 'en'
	}
}