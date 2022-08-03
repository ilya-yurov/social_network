import s from './Description.module.scss'
import yes from '../../../../assets/images/profile/yes_job.png'
import no from '../../../../assets/images/profile/no.webp'
import ProfileStatus from './ProfileStatus/ProfileStatus'



const Description = (props) => {
	return (
		<div className={s.content__description}>
			<p>{props.info.fullName}</p>
			{!props.info.aboutMe ? <p><span className={s.content__aboutMe}>About me:</span> no information</p> : <p><span className={s.content__aboutMe}>About me:</span> {props.info.aboutMe}</p> }
			<p><span className={s.content__aboutMe}>Look for a job:</span> {props.info.lookingForAJob ? <img src={yes}/> : <img src={no}/>}</p>
			<p><span className={s.content__aboutMe}>Description:</span> {props.info.lookingForAJobDescription}</p>
			<ProfileStatus status={props.status} updateStatus={props.updateStatus} />
			<p><span className={s.content__aboutMe}>Contacts:</span></p>
			<div className={s.content__contacts}>
				{props.info.contacts.facebook ? <div className={s.content__contact}><span>Facebook:</span> {props.info.contacts.facebook}</div> : null}
				{props.info.contacts.website ? <div className={s.content__contact}><span>Website:</span> {props.info.contacts.website}</div> : null}
				{props.info.contacts.vk ? <div className={s.content__contact}><span>VK:</span> {props.info.contacts.vk}</div> : null}
				{props.info.contacts.twitter ? <div className={s.content__contact}><span>Twitter:</span> {props.info.contacts.twitter}</div> : null}
				{props.info.contacts.instagram ? <div className={s.content__contact}><span>Instagram:</span> {props.info.contacts.instagram}</div> : null}
				{props.info.contacts.youtube ? <div className={s.content__contact}><span>YouTube:</span> {props.info.contacts.youtube}</div> : null}
				{props.info.contacts.github ? <div className={s.content__contact}><span>GitHub:</span> {props.info.contacts.github}</div> : null}
				{props.info.contacts.mainLink ? <div className={s.content__contact}><span>E-mail:</span> {props.info.contacts.mainLink}</div> : null}
			</div>
		</div>
	);
}

export default Description