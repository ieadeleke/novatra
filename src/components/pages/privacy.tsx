"use client";

import DisplayLayout from "@/components/layout";
import { useLanguage } from "@/context/LanguageContext";

const PrivacyPolicy = () => {
    const { language } = useLanguage();

    return (
        <div>
            <DisplayLayout>
                <>
                    <div className="bg-black h-[16rem] md:h-[20rem] px-5 md:px-20 w-full relative">
                        <h1 className="text-white text-xl md:text-3xl font-bold absolute bottom-16 md:bottom-24">
                            {
                                language === "en" ?
                                    "Privacy Policies" :
                                    language === "ru" ?
                                        "Политика конфиденциальности" :
                                        language === "fr" ?
                                            "Politique de confidentialité" :
                                            "سياسة الخصوصية"
                            }
                        </h1>
                    </div>
                    {
                        language === "en" ?
                            <div className="px-5 md:px-20 mb-20 pt-20">
                                <p className="text-sm md:text-base leading-loose md:leading-loose">
                                    This Privacy Policy outlines how we handle your data when you register or visit our website or any related pages.
                                </p>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">
                                    It also includes information on how we process the personal data of individuals applying for vacancies at our company.
                                </p>

                                <h2 className="mt-5 font-bold mb-2">Implementation of Privacy Policy</h2>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">
                                    This policy explains how we collect and process personal data, including information received from third parties, and the purposes for which we process it.
                                </p>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">
                                    It also defines your rights regarding your data, including the ability to request deletion, updates, transfers, or access to your personal information.
                                </p>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">Please note that this Privacy Policy applies only to data collected through this website.</p>

                                <h2 className="mt-5 font-bold mb-2">Contact Information</h2>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">
                                    <strong>Email:</strong> <a className="text-sm opacity-80" href="mailTo:help@novatradar.com" rel="noreferrer" target="_blank">help@novatradar.com</a>
                                </p>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">
                                    <strong>Phone:</strong> <a className="text-sm opacity-80" href="mailTo:+380936018625" rel="noreferrer" target="_blank">(+380) 936 01 8625</a>
                                </p>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">
                                    <strong>Address:</strong> Donetsk, Ukraine
                                </p>

                                <h2 className="mt-5 font-bold mb-2">Definitions</h2>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">
                                    <strong>Personal Data:</strong> Information that identifies or can identify an individual.
                                </p>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">
                                    <strong>Cookies:</strong> Small data files stored by your browser that help improve navigation, remember preferences, enhance security, and personalize content and advertisements.
                                </p>

                                <h2 className="mt-5 font-bold mb-2">Purpose of Data Collection</h2>
                                <ul>
                                    <li className="text-sm md:text-base leading-loose md:leading-loose">To facilitate site navigation and improve functionality.</li>
                                    <li className="text-sm md:text-base leading-loose md:leading-loose">To allow the site to remember user preferences, such as language or location.</li>
                                    <li className="text-sm md:text-base leading-loose md:leading-loose">To deliver targeted advertisements based on browsing behavior.</li>
                                </ul>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">For more details on the types of cookies we use and their storage duration, click the following link.</p>

                                <h2 className="mt-5 font-bold mb-2">Personal Data Protection</h2>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">
                                    We implement necessary policies, rules, and technical security measures to protect your data from unauthorized access, misuse, modification, or accidental loss.
                                </p>

                                <h2 className="mt-5 font-bold mb-2">Access to Your Information</h2>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">
                                    Through our contact form, you can request access to your data, update or delete your data, and revoke permission for its use.
                                </p>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">
                                    You can also manage cookie preferences through your browser settings, though some site features may become unavailable.
                                </p>

                                {/* <h2 className="mt-5 font-bold mb-2">Blocking Cookies</h2>
                        <p className="text-sm md:text-base leading-loose md:leading-loose">You can find guides on blocking or deleting cookies for different browsers here:</p>
                        <ul>
                            <li className="text-sm md:text-base leading-loose md:leading-loose">
                                <a href="https://support.google.com/chrome/answer/95647" rel="noreferrer" target="_blank" rel="noopener noreferrer">
                                    Chrome
                                </a>
                            </li>
                            <li className="text-sm md:text-base leading-loose md:leading-loose">
                                <a href="http://windows.microsoft.com/en-US/windows-vista/Block-or-allow-cookies" rel="noreferrer" target="_blank" rel="noopener noreferrer">
                                    Internet Explorer
                                </a>
                            </li>
                            <li className="text-sm md:text-base leading-loose md:leading-loose">
                                <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" rel="noreferrer" target="_blank" rel="noopener noreferrer">
                                    Mozilla Firefox
                                </a>
                            </li>
                            <li className="text-sm md:text-base leading-loose md:leading-loose">
                                <a href="https://www.apple.com/legal/Privacy/en-ww/cookies/" rel="noreferrer" target="_blank" rel="noopener noreferrer">
                                    Safari
                                </a>
                            </li>
                        </ul> */}

                                <h2 className="mt-5 font-bold mb-2">Third-Party Data Sharing</h2>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">We may share your data with the following:</p>
                                <ul>
                                    <li className="text-sm md:text-base leading-loose md:leading-loose">NovaTradar employees</li>
                                    <li className="text-sm md:text-base leading-loose md:leading-loose">External services such as mailing lists and Google Analytics</li>
                                    <li className="text-sm md:text-base leading-loose md:leading-loose">Third parties responsible for specific tasks</li>
                                </ul>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">Additionally, upon legal request, we may be required to share data with government agencies and regulatory bodies.</p>

                                <h2 className="mt-5 font-bold mb-2">Privacy Policy Updates</h2>
                                <p className="text-sm md:text-base leading-loose md:leading-loose">
                                    This Privacy Policy may change based on updates to data collection and processing methods or legal requirements. If changes occur, a notification with a link to the updated policy will be displayed on our website.
                                </p>
                            </div>
                            : language === "ru" ?
                                <div className="px-5 md:px-20 mb-20 pt-20">
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        Эта Политика конфиденциальности описывает, как мы обрабатываем ваши данные при регистрации или посещении нашего сайта или связанных страниц.
                                    </p>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        В ней также содержится информация о том, как мы обрабатываем персональные данные лиц, подающих заявки на вакансии в нашей компании.
                                    </p>

                                    <h2 className="mt-5 font-bold mb-2">Реализация политики конфиденциальности</h2>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        В данной политике объясняется, как мы собираем и обрабатываем персональные данные, включая информацию, полученную от третьих лиц, а также цели обработки.
                                    </p>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        Она также определяет ваши права в отношении данных, включая возможность запроса на удаление, обновление, передачу или доступ к вашей информации.
                                    </p>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">Обратите внимание, что эта Политика конфиденциальности применяется только к данным, собранным через этот сайт.</p>

                                    <h2 className="mt-5 font-bold mb-2">Контактная информация</h2>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        <strong>Email:</strong> <a className="text-sm opacity-80" href="mailTo:help@novatradar.com" rel="noreferrer" target="_blank">help@novatradar.com</a>
                                    </p>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        <strong>Телефон:</strong> <a className="text-sm opacity-80" href="mailTo:+380936018625" rel="noreferrer" target="_blank">(+380) 936 01 8625</a>
                                    </p>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        <strong>Адрес:</strong> Донецк, Украина
                                    </p>

                                    <h2 className="mt-5 font-bold mb-2">Определения</h2>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        <strong>Персональные данные:</strong> Информация, позволяющая идентифицировать или определить личность человека.
                                    </p>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        <strong>Cookies:</strong> Небольшие файлы данных, хранящиеся в вашем браузере, которые помогают улучшить навигацию, запоминать настройки, повышать безопасность и персонализировать контент и рекламу.
                                    </p>

                                    <h2 className="mt-5 font-bold mb-2">Цели сбора данных</h2>
                                    <ul>
                                        <li className="text-sm md:text-base leading-loose md:leading-loose">Обеспечение удобной навигации по сайту и улучшение его функциональности.</li>
                                        <li className="text-sm md:text-base leading-loose md:leading-loose">Сохранение пользовательских настроек, таких как язык или местоположение.</li>
                                        <li className="text-sm md:text-base leading-loose md:leading-loose">Предоставление таргетированной рекламы на основе поведения при просмотре.</li>
                                    </ul>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">Для получения дополнительной информации о типах используемых нами файлов cookie и сроках их хранения, нажмите следующую ссылку.</p>

                                    <h2 className="mt-5 font-bold mb-2">Защита персональных данных</h2>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        Мы применяем необходимые политики, правила и технические меры безопасности для защиты ваших данных от несанкционированного доступа, злоупотребления, модификации или случайной утраты.
                                    </p>

                                    <h2 className="mt-5 font-bold mb-2">Доступ к вашей информации</h2>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        Через нашу контактную форму вы можете запросить доступ к вашим данным, обновить или удалить их, а также отозвать разрешение на их использование.
                                    </p>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        Вы также можете управлять настройками файлов cookie в своем браузере, однако некоторые функции сайта могут стать недоступны.
                                    </p>

                                    <h2 className="mt-5 font-bold mb-2">Передача данных третьим лицам</h2>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">Мы можем передавать ваши данные следующим сторонам:</p>
                                    <ul>
                                        <li className="text-sm md:text-base leading-loose md:leading-loose">Сотрудникам NovaTradar</li>
                                        <li className="text-sm md:text-base leading-loose md:leading-loose">Внешним сервисам, таким как почтовые рассылки и Google Analytics</li>
                                        <li className="text-sm md:text-base leading-loose md:leading-loose">Третьим лицам, ответственным за выполнение определенных задач</li>
                                    </ul>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">Кроме того, по юридическому запросу мы можем передавать данные государственным органам и регулирующим инстанциям.</p>

                                    <h2 className="mt-5 font-bold mb-2">Обновления политики конфиденциальности</h2>
                                    <p className="text-sm md:text-base leading-loose md:leading-loose">
                                        Настоящая Политика конфиденциальности может изменяться в зависимости от обновлений методов сбора и обработки данных или изменений в законодательстве. В случае изменений на нашем сайте будет размещено уведомление со ссылкой на обновленную политику.
                                    </p>
                                </div>
                                : language === "fr" ?
                                    <div className="px-5 md:px-20 mb-20 pt-20">
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            Cette politique de confidentialité décrit comment nous traitons vos données lorsque vous vous inscrivez ou visitez notre site Web ou ses pages associées.
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            Elle inclut également des informations sur la manière dont nous traitons les données personnelles des personnes postulant pour des postes dans notre entreprise.
                                        </p>

                                        <h2 className="mt-5 font-bold mb-2">Mise en œuvre de la politique de confidentialité</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            Cette politique explique comment nous collectons et traitons les données personnelles, y compris celles provenant de tiers, et les finalités pour lesquelles nous les traitons.
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            Elle définit également vos droits concernant vos données, y compris la possibilité de demander la suppression, la mise à jour, la transmission ou l'accès à vos informations personnelles.
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">Veuillez noter que cette politique de confidentialité s'applique uniquement aux données collectées via ce site Web.</p>

                                        <h2 className="mt-5 font-bold mb-2">Informations de contact</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            <strong>Email:</strong> <a className="text-sm opacity-80" href="mailTo:help@novatradar.com" rel="noreferrer" target="_blank">help@novatradar.com</a>
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            <strong>Téléphone:</strong> <a className="text-sm opacity-80" href="mailTo:+380936018625" rel="noreferrer" target="_blank">(+380) 936 01 8625</a>
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            <strong>Adresse:</strong> Donetsk, Ukraine
                                        </p>

                                        <h2 className="mt-5 font-bold mb-2">Définitions</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            <strong>Données personnelles:</strong> Toute information qui permet d'identifier ou de contacter une personne physique.
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            <strong>Cookies:</strong> Petits fichiers de données stockés par votre navigateur pour améliorer la navigation, mémoriser les préférences, améliorer la sécurité et personnaliser le contenu et la publicité.
                                        </p>

                                        <h2 className="mt-5 font-bold mb-2">Objectif de la collecte de données</h2>
                                        <ul>
                                            <li className="text-sm md:text-base leading-loose md:leading-loose">Pour faciliter la navigation sur le site et améliorer sa fonctionnalité.</li>
                                            <li className="text-sm md:text-base leading-loose md:leading-loose">Pour permettre au site de mémoriser les préférences de l'utilisateur, telles que la langue ou la localisation.</li>
                                            <li className="text-sm md:text-base leading-loose md:leading-loose">Pour diffuser des publicités ciblées en fonction du comportement de navigation.</li>
                                        </ul>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">Pour plus d'informations sur les types de cookies que nous utilisons et leur durée de conservation, veuillez consulter le lien suivant.</p>

                                        <h2 className="mt-5 font-bold mb-2">Protection des données personnelles</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            Nous mettons en place des politiques, règles et mesures techniques nécessaires pour protéger vos données contre tout accès non autorisé, utilisation abusive, modification ou perte accidentelle.
                                        </p>

                                        <h2 className="mt-5 font-bold mb-2">Accès à vos informations</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            Vous pouvez demander l'accès à vos données, les mettre à jour, les supprimer ou retirer votre consentement en utilisant notre formulaire de contact.
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            Vous pouvez également gérer vos préférences en matière de cookies via les paramètres de votre navigateur, bien que certaines fonctionnalités du site puissent ne pas être disponibles.
                                        </p>

                                        <h2 className="mt-5 font-bold mb-2">Partage des données avec des tiers</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">Nous pouvons partager vos données avec :</p>
                                        <ul>
                                            <li className="text-sm md:text-base leading-loose md:leading-loose">Les employés de NovaTradar</li>
                                            <li className="text-sm md:text-base leading-loose md:leading-loose">Des services tiers, tels que des listes de diffusion et Google Analytics</li>
                                            <li className="text-sm md:text-base leading-loose md:leading-loose">Des tiers chargés de certaines tâches spécifiques</li>
                                        </ul>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">De plus, nous pouvons être amenés à partager vos données avec les autorités gouvernementales et les régulateurs sur demande légale.</p>

                                        <h2 className="mt-5 font-bold mb-2">Mises à jour de la politique de confidentialité</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            Cette politique de confidentialité peut être mise à jour en fonction des modifications apportées à nos pratiques de collecte et de traitement des données ou aux exigences légales. Toute mise à jour sera accompagnée d'un avis indiquant le lien vers la politique mise à jour.
                                        </p>
                                    </div>
                                    :
                                    <div className="px-5 md:px-20 mb-20 pt-20">
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            توضح سياسة الخصوصية هذه كيفية تعاملنا مع بياناتك عندما تقوم بالتسجيل أو زيارة موقعنا الإلكتروني أو صفحاته المرتبطة.
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            تتضمن هذه السياسة أيضًا معلومات حول كيفية تعاملنا مع البيانات الشخصية للأشخاص الذين يتقدمون للحصول على وظائف في شركتنا.
                                        </p>

                                        <h2 className="mt-5 font-bold mb-2">تنفيذ سياسة الخصوصية</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            تشرح هذه السياسة كيف نقوم بجمع ومعالجة البيانات الشخصية، بما في ذلك تلك القادمة من أطراف ثالثة، والأغراض التي نستخدمها من أجلها.
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            كما تحدد أيضًا حقوقك بشأن بياناتك، بما في ذلك إمكانية طلب الحذف أو التحديث أو النقل أو الوصول إلى معلوماتك الشخصية.
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">يرجى ملاحظة أن سياسة الخصوصية هذه تنطبق فقط على البيانات التي تم جمعها من خلال هذا الموقع الإلكتروني.</p>

                                        <h2 className="mt-5 font-bold mb-2">معلومات الاتصال</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            <strong>البريد الإلكتروني:</strong> <a className="text-sm opacity-80" href="mailTo:help@novatradar.com" rel="noreferrer" target="_blank">help@novatradar.com</a>
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            <strong>الهاتف:</strong> <a className="text-sm opacity-80" href="mailTo:+380936018625" rel="noreferrer" target="_blank">(+380) 936 01 8625</a>
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            <strong>العنوان:</strong> دونيتسك، أوكرانيا
                                        </p>

                                        <h2 className="mt-5 font-bold mb-2">التعريفات</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            <strong>البيانات الشخصية:</strong> أي معلومات تسمح بتحديد هوية شخص مادي أو التواصل معه.
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            <strong>الكوكيز:</strong> ملفات بيانات صغيرة يقوم متصفحك بتخزينها لتحسين التصفح، وتذكر التفضيلات، وتحسين الأمان، وتخصيص المحتوى والإعلانات.
                                        </p>

                                        <h2 className="mt-5 font-bold mb-2">أغراض جمع البيانات</h2>
                                        <ul>
                                            <li className="text-sm md:text-base leading-loose md:leading-loose">لتسهيل التنقل على الموقع وتحسين وظائفه.</li>
                                            <li className="text-sm md:text-base leading-loose md:leading-loose">لتمكين الموقع من تذكر تفضيلات المستخدم، مثل اللغة أو الموقع الجغرافي.</li>
                                            <li className="text-sm md:text-base leading-loose md:leading-loose">لنشر الإعلانات المستهدفة بناءً على سلوك التصفح.</li>
                                        </ul>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">لمزيد من المعلومات حول أنواع الكوكيز التي نستخدمها ومدة احتفاظنا بها، يرجى الرجوع إلى الرابط التالي.</p>

                                        <h2 className="mt-5 font-bold mb-2">حماية البيانات الشخصية</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            نحن نطبق السياسات والقواعد والإجراءات التقنية اللازمة لحماية بياناتك من الوصول غير المصرح به أو سوء الاستخدام أو التعديل أو الفقدان العرضي.
                                        </p>

                                        <h2 className="mt-5 font-bold mb-2">الوصول إلى معلوماتك</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            يمكنك طلب الوصول إلى بياناتك أو تحديثها أو حذفها أو سحب موافقتك باستخدام نموذج الاتصال الخاص بنا.
                                        </p>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            يمكنك أيضًا إدارة تفضيلات الكوكيز الخاصة بك عبر إعدادات متصفحك، على الرغم من أن بعض وظائف الموقع قد تكون غير متوفرة.
                                        </p>

                                        <h2 className="mt-5 font-bold mb-2">مشاركة البيانات مع الأطراف الثالثة</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">قد نشارك بياناتك مع:</p>
                                        <ul>
                                            <li className="text-sm md:text-base leading-loose md:leading-loose">موظفي NovaTradar</li>
                                            <li className="text-sm md:text-base leading-loose md:leading-loose">خدمات الطرف الثالث مثل قوائم البريد الإلكتروني وGoogle Analytics</li>
                                            <li className="text-sm md:text-base leading-loose md:leading-loose">أطراف ثالثة مسؤولة عن بعض المهام المحددة</li>
                                        </ul>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">قد نكون مطالبين أيضًا بمشاركة بياناتك مع السلطات الحكومية والتنظيمية عند الطلب القانوني.</p>

                                        <h2 className="mt-5 font-bold mb-2">تحديثات سياسة الخصوصية</h2>
                                        <p className="text-sm md:text-base leading-loose md:leading-loose">
                                            قد يتم تحديث سياسة الخصوصية هذه بناءً على التغييرات في ممارسات جمع البيانات ومعالجتها أو وفقًا للمتطلبات القانونية. وسيتم نشر أي تحديث مع إشعار يتضمن رابطًا إلى السياسة المحدثة.
                                        </p>
                                    </div>
                    }
                </>
            </DisplayLayout>
        </div>
    );
};

export default PrivacyPolicy;
