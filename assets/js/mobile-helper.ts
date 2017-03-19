export class MobileHelper {
	// Values should match bootstrap-variables.less
	static mobileMQ = '(max-width: 767px)'; // @screen-xs-max
	static tabletMQ = '(max-width: 1024px)'; // @screen-sm-max

	static isMobile() : boolean {
		var mq = window.matchMedia(MobileHelper.mobileMQ);
		return mq.matches;
	}

	static isMobileOrTablet() : boolean {
		var mq = window.matchMedia(MobileHelper.tabletMQ);
		return mq.matches;
	}
}
