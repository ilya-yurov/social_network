import s from './Footer.module.scss'

const Footer = (props) => {
	return (
		<div className={s.footer}>
			<div className={s.footer__container}>
				<img className={s.footer__img} src='https://yandex-images.clstorage.net/EMQ5b2153/5a2826huko6n/QVLd0ZOf5EfM6knJ8HJ3PAIxTl-pOgyzQ0dpHoiuAkRgEEELahpTppIYkj-O-p5smWd0gBp3LtC5y9LJ_wfagmU2HGB3b0RXzNqZWEDiB4yCwc4e6UopNjLy_E-YThbgcNUC7f1IceBwjsU4eR36-QznFPTe03rWfzsFTLgxjldzYi6ghV2klKiqqktjoEYpw1JtS_mPjhIWIi5P_-1WA-fAcZ9e-EKB8l20iOmtychfl_R0OMDbR1_dlL2pQr7lMwBdkFdNVNYqeMsqUAMFmBHBnVlLfzySVZIf79x_RuBnwZG8bBkg4rJc5dhLL5h7DIdGlxszOyadbCT9GMGOlZEybrG1HcQluEpJGZKiVOhDcl2Lej59oqQS_f7OfwfRhGAwnh-YsYGjPbcrKQ5pC-wURTVqUvlFf5x2PYgyHfeQsJ2yN73Et-rburkhorcbkgOOu5ltrKNmMF2v3Y3E4yfw4g7d6LMBAG6mCJjP-zmMVjS3CuCptKxPxc_qo-z2IVGdgNQNZqTIiQnLMJOFKGCRXJgIr72xNzB-zF_s1SPkAbFvHDjAYSMsRxuY7EsLjYcWRslzCce8PAavClA8VDJSbiLXDYb2WxkZ-eDyp-gB4Z-oCd-NAmRCXxw8b-Xg10OTLkwaUwAT3qeZWL6byc6mdYVK4ukUvU_HLttDzfQBMZyjxb2GxOgYebqRMtSbQkBvWDlvTrA28D4_3q6WYAQxMl0dCpHQAvxnaLgOOavMlCa36lHLV14vtT4JIZ1EEPCOsGRf1hSaiosoU3A2G-LCfhu5_e1RpFJsrh7MxhH0I0EtDUowkVPuhCjqDDnJ_sXVhAqwCUfejpXsKME9Z4NyvjBXrjWlqUjJWeBDh-pS8y5bK718szXS37ysjRfQN6ByL4w6sGGijKcreI4LqJyFJce4o8um_N50nuhQzEYwIIyRBz42xdr7aFmQk0YZwvFMGkkt7WPEoE_us'></img>
				<div className={s.footer__text}>
					2022. Ilya Yurov. All rights reserved. 
				</div>
			</div>
		</div>
	)
}

export default Footer;