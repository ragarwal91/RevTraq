require 'rails_helper'

describe User do
  let(:ranjan) { User.create! username: 'RAgarwal', first_name: 'Ranjan', last_name: 'Agarwal', email: 'ragarwal91@gmail.com'}

  it { is_expected.to validate_presence_of(:username) }
  it { is_expected.to validate_uniqueness_of(:username) }

  it { is_expected.to validate_presence_of(:first_name) }
  it { is_expected.to validate_presence_of(:last_name) }

  it { is_expected.to validate_presence_of(:email) }
  it { is_expected.to validate_uniqueness_of(:email) }


end
