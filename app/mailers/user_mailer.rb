class UserMailer < ApplicationMailer
	def mailing_list_confirmation(user)
		@user = user
		mail(to: user.email, 
			subject: "Registered", 
			from: "admin@humbleroots.co", 
			bcc: "admin@humbleroots.co")
	end
end
